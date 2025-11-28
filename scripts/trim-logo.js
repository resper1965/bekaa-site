const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function trimLogo() {
  try {
    const inputPath = path.join(__dirname, '../public/BEKAA_transparent.png');
    const outputPath = path.join(__dirname, '../public/BEKAA_logo.png');
    
    // Ler a imagem
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Imagem original: ${metadata.width}x${metadata.height}`);
    
    // Fazer trim automático (remove bordas transparentes)
    const trimmed = await image
      .trim({
        threshold: 10, // Tolerância para pixels "quase transparentes"
      })
      .toBuffer();
    
    // Salvar imagem cortada
    await sharp(trimmed)
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);
    
    const newMetadata = await sharp(outputPath).metadata();
    console.log(`Imagem cortada: ${newMetadata.width}x${newMetadata.height}`);
    console.log(`Salvo em: ${outputPath}`);
    
  } catch (error) {
    console.error('Erro ao processar imagem:', error.message);
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('\nInstale sharp primeiro: npm install sharp');
    }
  }
}

trimLogo();

