"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: 2083,
    //port: 3000 || 3000, 
    folderStorage: process.env.URL_STORAGE || "./storage",
    secretyKey: process.env.SECRETYKEY || 'f5ccc0f3-cbb6-4788-b4c8-403c22cd110ffdafda',
    publicRoutes: process.env.PUBLICROUTERS || ['usuario/Cadastrar', 'usuario/autenticar', 'categoria', 'banner', 'produtos/:id/categoria', 'usuario/cadastro', 'usuario/logar', 'usuario', 'adicionais', 'produtos', 'pedido/notificacao', '/pedido/token', '/pedido/Pagamento', 'parametros', 'confirmaragendamento', 'enviaragendamento']
};
//# sourceMappingURL=config.js.map