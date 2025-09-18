#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Iniciando iPhone 17 Pro...');

try {
  // Verifica se o simulador está disponível
  console.log('📱 Verificando simulador iPhone 17 Pro...');
  const devices = execSync('xcrun simctl list devices available', { encoding: 'utf8' });
  
  if (!devices.includes('iPhone 17 Pro')) {
    console.error('❌ iPhone 17 Pro não encontrado nos simuladores disponíveis');
    process.exit(1);
  }

  // Inicia o simulador
  console.log('🔧 Iniciando simulador iPhone 17 Pro...');
  execSync('xcrun simctl boot "iPhone 17 Pro"', { stdio: 'inherit' });

  // Aguarda um momento para o simulador inicializar
  console.log('⏳ Aguardando inicialização do simulador...');
  setTimeout(() => {
    console.log('✅ Simulador iPhone 17 Pro iniciado!');
    console.log('🎯 Execute "npm run ios" para abrir o app no simulador');
  }, 3000);

} catch (error) {
  console.error('❌ Erro ao iniciar o simulador:', error.message);
  process.exit(1);
}
