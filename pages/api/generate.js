const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    const MANGA_INSTRUCTION = 'Réponds uniquement sur des sujets liés aux mangas, en étant concis et amical. répond directement en proposant des mangas';

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent([`${MANGA_INSTRUCTION} ${prompt}`]);
      const responseText = result.response.text().replace(/\*/g, '').trim();

      res.status(200).json({ response: responseText });
    } catch (error) {
      console.error("Erreur lors de la connexion à Gemini :", error);
      res.status(500).json({ error: "Erreur lors de la génération de contenu" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
