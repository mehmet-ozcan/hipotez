const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');

async function convert() {
  try {
    const inputPath = 'C:\\Users\\OzcanPC\\.gemini\\antigravity\\brain\\a7eb1f53-fc1c-411d-8795-10a461618a47\\media__1777508479272.jpg';
    
    // Save as png (overwrite logo2.png)
    await sharp(inputPath)
      .resize(256, 256)
      .toFile('assets/logo2.png');
    
    // Convert png to ico (overwrite app-icon.ico)
    const buf = await pngToIco('assets/logo2.png');
    fs.writeFileSync('assets/app-icon.ico', buf);
    
    console.log('Conversion successful!');
  } catch (err) {
    console.error(err);
  }
}

convert();
