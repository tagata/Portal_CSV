
let empresa = "VMSA"
function criaCookie (){
    //deleta
    //document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    document.cookie = "Marcio Tagata";

    console.log("Cookie criado")


}

function loadCookie(){
    //criaCookie();
    //console.log(document.cookie)
    //console.log(menuVMSA)
    console.log("lendo")
    console.log("Cookie ->" + document.cookie)
    if (document.cookie=="Marcio Tagata"){
        menuVMSA.push({
                parent: 'My Links',
                label: 'My Links ',
                icon: '🚧',
                id:'MyLinks',
                click: clicar,
                child: [
                    { parent: 'My Links', label: 'Voltar', icon: '↩' , click: backToParent }
                ],
            rightIcon: ''
            })
        }
        console.log(menuVMSA)
}


//==========MENU VILLARES ===========
let menuVMSA = [
   
    //-----------Menu Corporate
    {
        parent: 'Corporate',
        label: 'Corporate',
        icon: '📋',
        id:'Corporate',
        click: clicar,
        child: [
            { parent: 'Corporate', label: 'Voltar', icon: '↩' , click: backToParent }],
        rightIcon: ''
    },


    //-----------Menu Gestao da Proudcao
    {
        parent: 'Gestao de Producao',
        label: 'Gestão de Produção',
        icon: '🏭',
        id:'Gestao de Producao',
        click: clicar,
        child: [
            { parent: 'Gestao de Producao', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },

    //-----------Menu Gestao da Vendas
    {
        parent: 'Gestao de Vendas',
        label: 'Gestão de Vendas',
        icon: '📃',
        id:'Gestao de Vendas',
        click: clicar,
        child: [
            { parent: 'Gestao de Vendas', label: 'Voltar', icon: '↩' , click: clicar }
        ],
        rightIcon: ''
    },

    
    //-----------Menu Gestao da Estoque
    {
        parent: 'Gestao de Estoque',
        label: 'Gestão de Estoque',
        icon: '🏬',
        id:'Gestao de Estoque',
        click: clicar,
        child: [
            { parent: 'Gestao de Estoque', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },

    //-----------Menu Gestao da Qualidade
    {
        parent: 'Gestao da Qualidade',
        label: 'Gestão da Qualidade',
        icon: '✅',
        id:'Gestao da Qualidade',
        click: clicar,
        child: [
            { parent: 'Gestao da Qualidade', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },

    //-----------Menu Gestao Financeira
    {
        parent: 'Gestao Financeira',
        label: 'Gestão Financeira',
        icon: '💰',
        id:'Gestao Financeira',
        click: clicar,
        child: [
            { parent: 'Gestao Financeira', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },
    
    

       //-----------Menu Gestao CD
       {
        parent: 'Gestao CD',
        label: 'Gestão CS&S',
        icon: '💡',
        id:'Gestao CD',
        click: clicar,
        child: [
            { parent: 'Gestao CD', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },


       //-----------Menu Gestao CD
       {
        parent: 'WCM',
        label: 'WCM',
        icon: '📌',
        id:'WCM',
        click: clicar,
        child: [
            { parent: 'WCM', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },


            //-----------Menu departamentos
        {
            parent: 'Departamentos',
            label: '⭐    Departamentos     ⭐',
            icon: '',
            id:'Departamentos',
            click: 'clicar',
            child: [
                { parent: 'Departamentos', label: 'Voltar', icon: '↩' , click: backToParent }
            ],
            rightIcon: ''
        },
       
  //-----------Menu Controladoria
    {
        parent: 'controladoria',
        label: 'Controladoria',
        icon: '📈',
        click: goToChild,
        child: [
            { parent: 'controladoria', label: 'Voltar', icon: '↩' , click: backToParent },  
            { parent: 'controladoria', label: 'Custos (Power BI)', icon: '📝' , id:'Control Custos',click: clicar },
            { parent: 'controladoria', label: 'Estoques', icon: '╚►' , id:'Custos (Power BI) Estoques',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Despesas Tarifas e Ocupação', icon: '╚►' , id:'Custos (Power BI) Despesas Tarifas Ocupação',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'MP Preços Inflação Indicadores', icon: '╚►' , id:'Custos (Power BI) MP Preços Inflação Indicadores',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Indicadores Qualidade', icon: '╚►' , id:'Custos (Power BI) Indicadores de Qualidade',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Apresentações', icon: '╚►' , id:'Custos (Power BI) Apresentações',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Margem', icon: '╚►' , id:'Custos (Power BI) Análise Margem',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Informações Comerciais', icon: '╚►' , id:'Informações Comerciais',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'VMNL', icon: '╚►' , id:'Custos (Power BI) VMNL',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Drawback', icon: '╚►' , id:'Custos (Power BI) Drawback',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Indices Econômicos', icon: '╚►' , id:'Custos (Powre BI) Indices Econômicos',click: clicar,subMenu:"SIM"  },            
            { parent: 'controladoria', label: 'Custos (BW)', icon: '📝' , id:'Gestao de Custo',click: clicar },
            { parent: 'controladoria', label: 'Análise de Custos', icon: '╚►' , id:'Custos (BW) Análise de Custo',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Desempenho', icon: '╚►' , id:'Custos (BW) Desempenho',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Despesas Tarifas e Ocupação', icon: '╚►' , id:'Custos (BW) Despesas Tarifas e Ocupação',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'FM', icon: '╚►' , id:'Custos (BW) FM',click: clicar,subMenu:"SIM"  },
            { parent: 'controladoria', label: 'Matéria Prima', icon: '╚►' , id:'Custos (BW) Matéria Prima',click: clicar,subMenu:"SIM"  },
            
            { parent: 'controladoria', label: 'GTI' , icon: '📝' , id:'Control GTI',click: clicar},
            { parent: 'controladoria', label: 'Vendas' , icon: '📝' , id:'Control Vendas',click: clicar},
            { parent: 'controladoria', label: 'Profitability', icon: '╚►' , id:'Control Vendas Profitability',click: clicar,subMenu:"SIM"  },


            { parent: 'controladoria', label: 'Planejamento de Resultado',icon: '📝', id: 'Control Planejamento',click: clicar},
            { parent: 'controladoria', label: 'Gestão de Resultado',icon: '📝', id: 'Gestao de Resultado',click: clicar},
            { parent: 'controladoria', label: 'Analysis for Office',icon: '📝', id: 'AO',click: clicar  }
        ],

        rightIcon: '➡'
    },

      //-----------Menu Compras
      {
        parent: 'Compras',
        label: 'Compras',
        icon: '🛒',
        id:'Compras',
        click: clicar,
        child: [
            { parent: 'Compras', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },

       //-----------Menu Gestao Contabil
       {
        parent: 'contabilidade',
        label: 'Contabilidade',
        icon: '📘',
        id:'Contabilidade',
        click: goToChild,
        child: [
            { parent: 'contabilidade', label: 'Voltar', icon: '↩' , click: backToParent },
            { parent: 'contabilidade', label: 'Geral', icon: '📝' , id:'Contabil Geral',click: clicar },
            { parent: 'contabilidade', label: 'Imobilizado', icon: '📝' , id:'Contabil Imobilizado',click: clicar },
            { parent: 'contabilidade', label: 'Notas', icon: '📝' , id:'Contabil Notas',click: clicar },
            { parent: 'contabilidade', label: 'Projetos', icon: '📝' , id:'Contabil Projetos',click: clicar },
        ],
        rightIcon: '➡'
    },
    //-----------Menu Aciaria 
    
    {
        parent: 'aciaria',
        label: 'Aciaria',
        icon: '🏭',
        click: goToChild,
        child: [ 
            { parent: 'aciaria', label: 'Voltar', icon: '↩' , click: backToParent },  
            //{ parent: 'aciaria', label: 'Área de MP', icon: '▪'  ,click: clicar},
            //{ parent: 'aciaria', label: 'Aciaria Comum', icon: '▪'  },
            { parent: 'aciaria', label: 'Aciaria Convencional', icon: '📝',id:'Aciaria Convencional',click:clicar },
            //{ parent: 'aciaria', label: 'Aciaria Especial' , icon: '▪' },
            { parent: 'aciaria', label: 'Área MP', icon: '📝', id:'Area MP', click:clicar},
            { parent: 'aciaria', label: 'CEMP', icon: '📝',id:'CEMP', click:clicar },
            { parent: 'aciaria', label: 'Dados MIS (BW)', icon: '📝',id:'MIS BW', click:clicar }
        ],
        rightIcon: '➡'
    },

    
    {
        parent: 'rh',
        label: 'RH',
        icon: '🧍',
        id: 'RH',
        click: goToChild,
        child: [ 
            { parent: 'rh', label: 'Voltar', icon: '↩' , click: backToParent },  
            { parent: 'rh', label: 'Gestão Jornada de Trabalho', icon: '📝'  ,id:'Jornada Trabalho',click: clicar},
            { parent: 'rh', label: 'Gestão de Headcount', icon: '📝'  ,id:'Headcount',click: clicar},
            { parent: 'rh', label: 'PLR Indicadores 2021/22', icon: '📝'  ,id:'PLR 21 22',click: clicar},
            { parent: 'rh', label: 'PLR Indicadores 2022/23', icon: '📝'  ,id:'PLR 22 23',click: clicar},
        ],
        rightIcon: '➡'
    },

 //-----------Menu GTI 
    
    {
        parent: 'gti',
        label: 'GTI',
        icon: '💻',
        id: 'GTI',
        click: clicar,
        child: [ 
            { parent: 'gti', label: 'Voltar', icon: '↩' , click: backToParent },  
            //{ parent: 'gti', label: 'Acesso BW', icon: '▪'  ,click: clicar},
            //{ parent: 'aciaria', label: 'Aciaria Comum', icon: '▪'  },
            //s{ parent: 'gti', label: 'Segurança', icon: '📝',id:'Seguranca',click:clicar },
            //{ parent: 'aciaria', label: 'Aciaria Especial' , icon: '▪' },
            //{ parent: 'aciaria', label: 'Gestão', icon: '▪' },
            //{ parent: 'aciaria', label: 'Processos', icon: '▪' }
        ],
        rightIcon: ''
    },

//-----------Menu GTI 
    
    {
        parent: 'tecnologia',
        label: 'Tecnologia',
        icon: '📱',
        id: 'Tecnologia',
        click: goToChild,
        child: [ 
            { parent: 'tecnologia', label: 'Voltar', icon: '↩' , click: backToParent },  
            { parent: 'tecnologia', label: 'Engenharia da Qualidade', icon: '📝',id:'Tec Qualidade',click:clicar },
            { parent: 'tecnologia', label: 'Engenharia de Processos a Quente', icon: '📝',id:'Tec Quente',click:clicar },
            { parent: 'tecnologia', label: 'Engenharia de Processos a Frio', icon: '📝',id:'Tec Frio',click:clicar},
            { parent: 'tecnologia', label: 'Engenharia de Processos Químicos', icon: '📝',id:'Processos Químicos',click:clicar },
            { parent: 'tecnologia', label: 'Engenharia de Produtos Longos', icon: '📝',id:'',click:clicar },
            { parent: 'tecnologia', label: 'Engenharia de Peças', icon: '📝',id:'',click:clicar },
            { parent: 'tecnologia', label: 'Laboratórios', icon: '📝',id:'Tec Laboratorio',click:clicar },
            { parent: 'tecnologia', label: 'Pesquisa e Desenvolvimento', icon: '📝',id:'',click:clicar }
            
        ],
        rightIcon: '➡'
    },

   //-----------Menu Gestao Manutencao
       {
        parent: 'Manutencao',
        label: 'Manutenção',
        icon: '🛠️',
        id:'Manutencao',
        click: clicar,
        child: [
            { parent: 'Manutencao', label: 'Voltar', icon: '↩' , click: backToParent }
        ],
        rightIcon: ''
    },
   
]

//==========MENU ABUB ===============
let menuABUB =[
    {
        parent: 'ABUB Corporate',
        label: 'Corporate',
        id: 'ABUB Corporate',
        icon: '📋',
        click: clicar,
        child: [
            { parent: 'ABUB Corporate', label: 'Voltar', icon: '↩' , click: backToParent }],
        rightIcon: ''
        
    },
        //-----------Menu departamentos
        {
            parent: 'Departamentos',
            label: '⭐  Departamentos   ⭐',
            icon: '',
            id:'Departamentos',
            click: 'clicar',
            child: [
                { parent: 'Departamentos', label: 'Voltar', icon: '↩' , click: backToParent }
            ],
            rightIcon: ''
        },
       
    {
        parent: 'ABUB Comercial',
        label: 'Comercial',
        id: 'ABUB Comercial Menu',
        icon: '📃',
        click: goToChild,
        child: [
            { parent: 'ABUB Comercial', label: 'Voltar', icon: '↩' , click: backToParent },
            { parent: 'ABUB Comercial', label: 'Comercial', id:"ABUB Comercial",icon: '📃'  ,click: clicar},
            { parent: 'ABUB Comercial', label: 'Gerência',  id: 'ABUB Gerencia', icon: '📶', click:clicar },
            { parent: 'ABUB Comercial', label: 'KPI',  id: 'ABUB KPI', id: 'ABUB KPI', icon: '📊', click:clicar }],

        rightIcon: '➡'
        
    },

        
{
    parent: 'rh_abub',
    label: 'RH',
    icon: '🧍',
    id: 'RH_ABUB',
    click: goToChild,
    child: [ 
        { parent: 'rh_abub', label: 'Voltar', icon: '↩' , click: backToParent },  
        { parent: 'rh_abub', label: 'Gestão de Headcount', icon: '📝'  ,id:'Headcount abub',click: clicar},
        { parent: 'rh_abub', label: 'PLR Indicadores 2021/22', icon: '📝'  ,id:'PLR 21 22 abub',click: clicar},
        { parent: 'rh_abub', label: 'PLR Indicadores 2022/23', icon: '📝'  ,id:'PLR 22 23 abub',click: clicar},
    ],
    rightIcon: '➡'
},

]

let menu =[]
//⚫   🔘 🔹 💬 👁️‍🗨️🗨️ 🗯️ 💭 🔵 🟦 ⭐ ⚡ 🌟 📖 📘 📃💰💵 🧾📧 ✏📝 📈📊 📋 ⚙ 📶 💲

//===========Abre Documentação =========
function clicaDocumentacao(){
    criaLinks('links.csv','Documentacao')
    criaHeader('Documentacao')
    document.getElementById("sidebar").innerHTML ="";
}

//============Abre Links ===============
function clicar (event) {
    //console.log("CLICOU");
    //console.log(event.currentTarget.id)
    criaLinks("links.csv", event.currentTarget.id);

}

//==========Volta para Menu Pai =========
function backToParent(event) {

    const { id } = event.currentTarget.dataset

    let moveIn = document.getElementById("menu");
    moveIn.className = 'menu menu-primary-enter menu-primary-enter-active'

    let moveOut = document.getElementById(id);
    moveOut.className = 'menu menu-secondary-exit menu-secondary-exit-active'

}

//===========Abre Submenu =============
function goToChild(event) {
       
    const { id } = event.currentTarget.dataset

    let moveIn = document.getElementById(id);
    moveIn.className = 'menu menu-secondary-enter menu-secondary-enter-active'


    let moveOut = document.getElementById("menu");
    moveOut.className = 'menu menu-primary-exit menu-primary-exit-active'

}

//===========cria Menu Item =============
const createMenuItem = (item) => {
    let li = document.createElement("li");
   
    if (item.id=="Departamentos")
    {
        li.className = 'label-div'
        li.innerHTML = `
            <span class="labelsdiv">${item.label}</span>
            `
    }else {
        li.className = 'menu-item'
        if (item.icon==''){

                li.innerHTML = `    
                <span class="label2">${item.label}</span>
                <div>${item.rightIcon || ''}</div>
            `
            
        }else {

            if (item.subMenu=="SIM"){
                li.innerHTML = `    

            
                <div class="icon2">${item.icon}</div>
                <span class="label2">${item.label}</span>
                <div>${item.rightIcon || ''}</div>
            `
            }else {
                li.innerHTML = `    

            
                <div class="icon">${item.icon}</div>
                <span class="label">${item.label}</span>
                <div>${item.rightIcon || ''}</div>
            `
            }
            
        }
    }
    li.dataset.id = item.parent
    //console.log("LABEL " + item.label)
    li.setAttribute("id", item.id)
    li.onclick = item.click

    return li
}

//========Cria Menu filho ========
const createChildMenu = (items) => {
    const sidebar = document.getElementById("sidebar")
    const menu = document.createElement("ul");
    menu.className = 'menu menu-secondary-exit menu-secondary-exit-active'
    menu.id = items[0].parent
  
    items.map(el => {
        let li = createMenuItem(el)
        menu.appendChild(li)
    })
    
    if (menu != null){
        sidebar.appendChild(menu)
    }
}

// ======= Monta Menu Lateral ======
const buildMenu = (empresaTemp) => {
    
    if (empresaTemp == 'ABUB'){
        menu = menuABUB;
        let empresa = "ABUB"
        criaHeader("ABUB")
        criaLinks("links.csv", 'ABUB Corporate');
    } else {
        menu = menuVMSA;
        let empresa = "VMSA"
    }
    //console.log("BUILD MENU " + empresaTemp)
    
    document.getElementById("sidebar").innerHTML ="";
    //document.getElementById("ul").innerHTML ="";
    //document.getElementById("menu").innerHTML ="";

    const sidebar = document.getElementById("sidebar")
    const mainMenu = document.createElement("ul");

    
    mainMenu.className = 'menu'
    mainMenu.id = 'menu'
    menu.map(el => {
        let li = createMenuItem(el)
        mainMenu.appendChild(li)
        createChildMenu(el.child)
    })
    if( menu != null){
    sidebar.appendChild(mainMenu)
    }
}


// ====== Funcao para Ler Arquivo CSV e criar os links (criaConteudoLinks)=======
function criaLinks(filePath, QualPagina) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    criaConteudoLinks(result, QualPagina);
  
    
}

// ======= Montando pagina de Conteudo dinamica ========
// ======= conforme arquivo CSV =======//
function criaConteudoLinks(texto,QualPagina){
   
    vBwQuery = "http://vasswjp.voestalpine.root.local:58600/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?QUERY=QueryName&VARIABLE_SCREEN=X&DUMMY=1"
    vBwTemplate = "http://vasswjp.voestalpine.root.local:58600/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?TEMPLATE=TemplateName&DUMMY=0"
    vBWQueryLauchPad ="https://bi-reporting.voestalpine.net/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AbzaGr7o.M9JuiH.J7poQtE&XSYSTEM=cuid:AVkP3_TG5dBEqSbVJl65gTE&XTYPE=BW&XQUERY="
    //# faz a quebra de linha - separado # na ultima posição
    /*Primeira linha não é considerada - apenas para mostrar layout*/
    //ordenar a coluna nome da ABA por pagina

    //[0] NumLinha
    //[1] Tipo BW  /PBI
    //[2] NomeLink
    //[3] linkarquivo
    //[4] QualPagina
    //[5] TipoBW
    //[6] AbaNome;#

    //console.log(texto);
    var itens = texto.split('#');
    //console.log("Qual pagina" + QualPagina)
    //console.log("items - " +  itens);
    var valores = "";
    var Obs = "";
    //console.log ("qtd Linha (links.txt) :" + itens.length); 

    var vHtml = "";
    //Criando a listagem referente a ABAs
    vHtml = "<p> <center> <h2>" +QualPagina +"</p> </center> </h2>";     
    console.log("Criando links");
    console.log(itens);
    for(var i=1;i<itens.length;i++){
    
        valores = itens[i].split(';');
        //console.log("valores " +console.log(valores))   
        //console.log(QualPagina + " " + valores[4]);
        if (QualPagina === valores[4]){
            
            //console.log("AQUI - achou menu");
            vHtml = vHtml + "<li ";
            console.log(valores[2].substr(0,1));
            if (valores[2].substr(1,1)==="*"){
                vHtml = vHtml + "class = 'liGreen'>";
                Obs="OK";
            } else {
                vHtml = vHtml + "class ='li'>";
            }
            
            // check de icone
            if (valores[1]==="BW"){
                vHtml = vHtml + "<img src = 'bw.png' WIDTH=30 HEIGHT=30 >";
            } else if (valores[1]==="PBI") {
                vHtml = vHtml + "<img src = 'power_bi.png' WIDTH=30 HEIGHT=30 >";
            } else if (valores[1]==="DOC"){
                vHtml = vHtml + "<img src = 'doc.png' WIDTH=30 HEIGHT=30 >"
            } else if (valores[1]==="AO"){
                vHtml = vHtml + "<img src = 'AO.png' WIDTH=30 HEIGHT=30 >"
            } else if (valores[1]==="PDF"){
                vHtml = vHtml + "<img src = 'pdf.png' WIDTH=30 HEIGHT=30 >"
            };

            //criando link
            var vHref="";
            if (valores[5]=="Template"){
                vHref= vBwTemplate.replace ("TemplateName",valores[3]);
            } else if (valores[5] ==="Query"){                
                vHref = vBwQuery.replace ("QueryName",valores[3]);
            } else if (valores[1]=="DOC"){
                vHref =  "./bw_docs/" + valores[3] ;
            } else if (valores[1]=="PDF"){
                vHref =  "./bw_docs/" + valores[3] ;
                console.log(vHref)
            } else {
                vHref = valores[3];
            }

            if (valores[2]!=""){    
                 vHtml = vHtml + "<a href='" + vHref +"' target='_blank' >";
                //vHtml = vHtml + valores[2] +"</a>";
                vHtml = vHtml + valores[2] +"</a></li>";
                //if (valores[5] ==="Query") {
                //    vHtml = `${vHtml}<a href='${vBWQueryLauchPad}${valores[3]}' target='_blank' > <div class='tooltip'> <img src = 'Lauchpad.png' WIDTH=20 HEIGHT=20 > <span class='tooltiptext'>Novo Modelo</span> </div></a>`
                //}
                //vHtml = vHtml +"</li>";
            }   
                //console.log(vHtml);
        }
           
    }

    var h = document.getElementById("linkRelatorios");
    
    //fechando ABAS
    vHtml = vHtml + "</ul>"
    //console.log(vHtml);
    document.getElementById("linkRelatorios").innerHTML = vHtml
    //h.insertAdjacentHTML("afterend", vHtml);
    //  "afterbegin"         "afterend"         "beforebegin"         "beforeend"
    //var NovoLinks = ""
    //sNovoLinks = "<p class ='email'> Inclusão de novos links ou links com problema, favor entrar em contato através do Email. </p> <a href=mailto:'marcio.motitsuki@villaresmetals.com'> ✉ marcio.motitsuki@villaresmetals.com </a> "
    if (Obs=="OK"){
        var ObsHtml = ""
        ObsHtml ="<div>"
        ObsHtml = ObsHtml +"<p class = 'txtGreen'><br> Relatórios com **Nome Relatório**, utilizar para dados até 03/2021.</p>"
        ObsHtml = ObsHtml +"<p class = 'txtGreen'> Para dados 04/2021 iremos disponibilizar novos links, devido a nova estratificação, válida a partir desta data.</p>"
        ObsHtml = ObsHtml +"</div>"
        ObsHtml = ObsHtml +"<div>"
        ObsHtml = ObsHtml +"<p  class = 'legenda'><img src='bw.png' WIDTH=25 HEIGHT=20 href='#'>SAP BW&nbsp;&nbsp;&nbsp;&nbsp<img src='power_bi.png' WIDTH=20 HEIGHT=20 href='#'>Dashboard - Power BI"
        ObsHtml = ObsHtml +"</div>"
        ObsHtml = ObsHtml +"</div>"
        
         document.getElementById("obs").innerHTML=ObsHtml 
    }
    
        
}

//=========  Função para gerar a data  =========
function gera_data(){
    dayName = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
    monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto", "setembro","outubro", "novembro", "dezembro")
    now = new Date
    //console.log ("DATA" +  [now.getMonth()] + monName)
    document.write ( dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ".")
}

// ======= cria logo titulo e botoes direita ======
function criaHeader (selecao) {
    console.log("HEADER SELECAO" + selecao)
    var vHtml = "";
    vHtml = "<header>" ;
    vHtml = vHtml + "<div class='header-section'>" ;
    vHtml = vHtml + "  <div class='header-section-1'>" ;
    if (selecao=="ABUB") {
        vHtml = vHtml + "    <img class='logo'id='logo' img src='abub.png' WIDTH=250 HEIGHT=50>" ;
    } else {
        vHtml = vHtml + "    <img class='logo'id='logo' img src='LOGO.png' WIDTH=250 HEIGHT=50>" ;
    }
   
    vHtml = vHtml + "  </div>" ;
    vHtml = vHtml + "  <div class='header-section-2'>" ;
    vHtml = vHtml + "      Analytics Portal  ";
    vHtml = vHtml + "  </div>" ;
    vHtml = vHtml + "  <div class='header-section-3'>" ;
    console.log("TESTE");
    //console.log(username());
    //"    <div class='header-right'>" +
    console.log("HEADER " + selecao);
    if (selecao=="VMSA"){
            vHtml = vHtml + "      <a href='index.html' class='active'  >VMSA</a>" ;
        } else {
            vHtml = vHtml + "      <a  href='index.html'>VMSA</a>" ;
        }
        
    
     if (selecao=="ABUB"){
        vHtml = vHtml + "    <a href='#' onclick = buildMenu('ABUB') class='active' > ABUB";
    } else {
        vHtml = vHtml + "    <a href='#' onclick = buildMenu('ABUB')  > ABUB" ;
    }

    if (selecao=="Documentacao"){
        vHtml = vHtml + "      <a href='#' onclick = clicaDocumentacao()  class = 'active'>PDF / Doc</a>" ;
    } else {
        vHtml = vHtml + "      <a href='#' onclick = clicaDocumentacao()  >PDF / Doc</a>" ;
    }

    vHtml = vHtml + "<a href=mailto:marcio.motitsuki@villaresmetals.com> <img src='email-logo.png' width=30 height=30> </a>";
    //s"    </div>" +
    vHtml = vHtml + "  </div>" ;
    vHtml = vHtml + "</div>" ;
    vHtml = vHtml +  "</header> ";
   
document.getElementById("myHeader").innerHTML = vHtml
}

//======= cria menu sidenav =========
function criaMenu (empresa,qPagina){
    var vHtml =  "<div  id='mySidenav' class='sidenav'>"
    //console.log("CriaMenu - " + qPagina);
    //=======check qual empresa ========

    //======= MENU VILLARES =========
    if (empresa == "Villares"){
        if (qPagina=="Corporate"){
            vHtml =vHtml+ "<a href='corporate.html' class = 'sidenav_selected'>Corporate</a>"
        } else {
            vHtml =vHtml+ "<a href='corporate.html' >Corporate</a>"
        }

        if (qPagina=="Gestao de Producao"){
            vHtml =vHtml+ "<a href='gestaodeproducao.html' class = 'sidenav_selected'>Gestão de Produção</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaodeproducao.html' >Gestão de Produção</a>"
        }

        if (qPagina=="Gestao de Vendas"){
            vHtml =vHtml+ "<a href='gestaodevendas.html' class = 'sidenav_selected'>Gestão de Vendas</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaodevendas.html' >Gestão de Vendas</a>"
        }

        if (qPagina=="Gestao de Resultado"){
            vHtml =vHtml+ "<a href='gestaoderesultado.html' class = 'sidenav_selected'>Gestão de Resultado</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaoderesultado.html' >Gestão de Resultado</a>"
        }

        if (qPagina=="Gestao de Custos"){
            vHtml =vHtml+ "<a href='gestaodecustos.html' class = 'sidenav_selected'>Gestão de Custos</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaodecustos.html' >Gestão de Custos</a>"
        }

        if (qPagina=="Gestao de Estoque"){
            vHtml =vHtml+ "<a href='gestaodeestoque.html' class = 'sidenav_selected'>Gestão de Estoque</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaodeestoque.html' >Gestão de Estoque</a>"
        }

        if (qPagina=="Gestao da Qualidade"){
            vHtml =vHtml+ "<a href='gestaodaqualidade.html' class = 'sidenav_selected'>Gestão da Qualidade</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaodaqualidade.html' >Gestão da Qualidade</a>"
        }

        if (qPagina=="Gestao Financeira"){
            vHtml =vHtml+ "<a href='gestaofinaceira.html' class = 'sidenav_selected'>Gestão Financeira</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaofinanceira.html' >Gestão Financeira</a>"
        }    
        
        if (qPagina=="Gestao Contabil"){
            vHtml =vHtml+ "<a href='gestaocontabil.html' class = 'sidenav_selected'>Gestão Contábil</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaocontabil.html' >Gestão Contábil</a>"
        }

        if (qPagina=="Gestao CD"){
            vHtml =vHtml+ "<a href='gestaocd.html' class = 'sidenav_selected'>Gestão CD</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaocd.html' >Gestão CD</a>"
        }

        if (qPagina=="Gestao Compras"){
            //console.log("AQUI");
            vHtml =vHtml+ "<a href='gestaocompras.html' class = 'sidenav_selected'>Gestão Compras</a>"
        } else {
            vHtml =vHtml+ "<a href='gestaocompras.html' >Gestão Compras</a>"
        }

        if (qPagina=="Manutencao"){
            vHtml =vHtml+ "<a href='manutencao.html' class = 'sidenav_selected'>Manutenção</a>"
        } else {
            vHtml =vHtml+ "<a href='manutencao.html' >Manutenção</a>"
        }

        if (qPagina=="AO"){
            vHtml =vHtml+ "<a href='AO.html' class = 'sidenav_selected'>Analysis for Office</a>"
        } else {
            vHtml =vHtml+ "<a href='AO.html' >Analysis for Office</a>"
        }

    // ========== MENU ABUB ========
    }else if(empresa="ABUB"){
        if (qPagina=="Corporate"){
            vHtml =vHtml+ "<a href='abub_corporate.html' class = 'sidenav_selected'>Corporate</a>"
        } else {
            vHtml =vHtml+ "<a href='abub_corporate.html' >Corporate</a>"
        }
        if (qPagina=="Comercial"){
            vHtml =vHtml+ "<a href='abub_comercial.html' class = 'sidenav_selected'>Comercial</a>"
        } else {
            vHtml =vHtml+ "<a href='abub_comercial.html' >Comercial</a>"
        }
        if (qPagina=="Controladoria"){
            vHtml =vHtml+ "<a href='abub_controladoria.html' class = 'sidenav_selected'>Controladoria</a>"
        } else {
            vHtml =vHtml+ "<a href='abub_controladoria.html' >Controladoria</a>"
        }
        if (qPagina=="Gerencia"){
            vHtml =vHtml+ "<a href='abub_gerencia.html' class = 'sidenav_selected'>Gerência</a>"
        } else {
            vHtml =vHtml+ "<a href='abub_gerencia.html' >Gerência</a>"
        }

        if (qPagina=="KPI"){
            vHtml =vHtml+ "<a href='abub_KPI.html' class = 'sidenav_selected'>KPI</a>"
        } else {
            vHtml =vHtml+ "<a href='abub_KPI.html' >KPI</a>"
        }
    }

/*    if (qPagina==""){
    vHtml =vHtml+ "<a href='.html' class = 'sidenav_selected'></a>"
} else {
    vHtml =vHtml+ "<a href='.html' ></a>"
}
*/
    // ==== insere HTML na TAG ======
    document.getElementById("myMenu").innerHTML = vHtml;
   
}


