const { GoogleGenerativeAI } = require('@google/generative-ai');

class GeminiClient {
  constructor(apiKey) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateContent(prompt) {
    try {
      const model = await this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent([prompt]);
      return result.response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('Could not generate content');
    }
  }
}

module.exports = GeminiClient;
