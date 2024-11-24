class ImgProcess {
  async loadSVG(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const svgContent = await response.text();
      return svgContent;
    } catch (error) {
      console.error('Ошибка загрузки SVG:', error);
      return '';
    }
  }
}

export default new ImgProcess();
