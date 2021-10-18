# Bankly Open Api Schemas

O Bankly Open API Schemas é fortemente baseado no [OpenAPI Specification 3.*](https://swagger.io/specification) (OAS), assim como as APIs buscam aplicar a melhor interpretação da arquitetura REST.


![validate](https://github.com/acesso-bankly/open-api/actions/workflows/review.yaml/badge.svg)


# Executando o projeto local

```
$ git clone https://github.com/acesso-bankly/open-api.git && cd ./open-api
```

```
$ npm install && npm start
```

## Abrindo um editor

```
$ npm run edit:{api}
```

{apis}:

- oauth
- documents
- holders
- accounts
- cards
- pix
- ted
- boletos
- paybill
- events
- helpers

**⚠️ IMPORTANTE! Não é possível editar duas apis ao mesmo tempo**


# Como contribuir

### **Passo 1:** 

Crie uma branch com um dos prefixos: _feature/_ ou _enhancement/_ ou _fix/_ 

Ex: 

- feature/adiciona-idempotency-header
- enhancement/descricao-api-version
- fix/descricao-api-version

**⚠️ IMPORTANTE! Branchs que não respeitam a convenção proposta acima não serão revisadas**

### **Passo 2:**  

Abra o editor da api que deseja trabalha e acesso ```http://127.0.0.1:33201/?url=/oas/spec``` 

### **Passo 3:**  

Após fazer as atualizações commit as mudanças e submeta uma Pull Request apontando para a branch **develop**

**🗒️ DICA! Faça commits pequenos e centrados na alteração que está propondo**

### **Passo 4:**  

Caso tenha comentários e sugestões no Pull Request, aplique-os!


# Ferramentas

## Importando no Postman

### API Specification

### API Collection

# Convenções

## **Tags:**

**Beta:** 

```html
<span class="bkly-ref-small-beta-tag">beta</span>
```

A tag _beta_ define que o endpoint da api está em aprimoramento e poderá sofrer alterações que geram breaking changes.

---

**Stable:**

```html
<span class="bkly-ref-small-stable-tag">stable</span>
```

A tag _stable_ define o endpoint a api produto estável e não sofrerá alterações que geram breaking changes.

---

**Deprecated:**

```html
<span class="bkly-ref-small-deprecated-tag">deprecated</span>
```

A tag _deprecated_ define o endpoint da api está depreciado e é substituído por outro endpoint.

---

**Scope**

```html
<span class="bkly-ref-scope-tag">scope: {{scope}}/span>
```

A tag _scope_ define qual é o scope requerido no token para acessar a api.

---

## Sistema de verão

O Bankly faz forte uso do sistemas de versão semantico, no entanto, na API Pública, somente exibimos e requerimos que seja informado apenas o major da API, através do header ```api-version```.

# Referências

[OpenAPI Specification](https://swagger.io/specification)

[REST API Tutorial](https://restfulapi.net)

[Fundamentos para sistemas com arquiteturas REST](https://arquiteturadesoftware.online/capitulos/capitulo-09)

[Versionamento Semântico 2.0.0](https://semver.org/lang/pt-BR)








