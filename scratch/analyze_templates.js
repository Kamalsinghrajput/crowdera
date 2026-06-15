const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = 'e:\\crowdera\\src\\templates';

function analyzeTemplates() {
  const templates = fs.readdirSync(TEMPLATES_DIR).filter(f => fs.statSync(path.join(TEMPLATES_DIR, f)).isDirectory());
  
  // Sort them by the number in template-X
  templates.sort((a, b) => {
    const numA = parseInt(a.split('-')[1]);
    const numB = parseInt(b.split('-')[1]);
    return numA - numB;
  });

  templates.forEach(temp => {
    const compDir = path.join(TEMPLATES_DIR, temp, 'components');
    if (!fs.existsSync(compDir)) return;
    
    console.log(`=== ${temp.toUpperCase()} ===`);
    const components = fs.readdirSync(compDir).filter(f => f.endsWith('.jsx'));
    components.forEach(comp => {
      const filePath = path.join(compDir, comp);
      const stats = fs.statSync(filePath);
      console.log(` - ${comp} (${stats.size} bytes)`);
    });
  });
}

analyzeTemplates();
