class myrobot(object):
    def cadastra_usuario(self, nome, senha):
        self._nome = nome
        self._senha = senha
        self._status = "offline"
        print(f"Cadastro: 'user':'{self._nome}','senha':'{self._senha}'")

    def o_nome_cadastrado_deve_ser(self, nome):
        if nome != self._nome:
            raise AssertionError(f"Cadastrado:{self._nome}.Esperado:{nome}")

    def o_usuario_solicita_acesso(self, nome, senha):
        self._status = "offline"
        if nome == self._nome and senha == self._senha:
            self._status = "online"
    
    def o_estado_do_usuario_deve_ser(self, status):
        if status != self._status:
            raise AssertionError(f"Estado:{self._status}.Esperado:{status}")

    def o_usuario_encerra_o_acesso(self):
        self._status = "offline"