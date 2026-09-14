// =========================================
// NUTRIDATA
// BANCO DE DADOS DE ALIMENTOS
// =========================================

const FOODS_DATABASE = [

    // =========================================
    // BATATA-DOCE
    // =========================================

    {
        id: 'batata-doce',
        name: 'Batata-doce',
        scientificName: 'Ipomoea batatas',
        category: 'Legumes',
        categorySlug: 'legumes',
        origin: 'América Central e do Sul',

        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',

        summary: 'Tubérculo nutritivo de sabor adocicado, fonte de carboidratos, fibras e carotenoides.',

        features: [
            'Fonte de fibras',
            'Rica em carotenoides',
            'Fonte de carboidratos'
        ],

        nutrition: {
            calories: 86,
            proteins: 1.6,
            carbs: 20.1,
            totalSugars: 4.2,
            addedSugars: 0,
            fats: 0.1,
            satFats: 0.02,
            fiber: 3.0,
            sodium: 55,
            potassium: 337,
            calcium: 30,
            iron: 0.6,
            magnesium: 25,
            phosphorus: 47,
            zinc: 0.3,

            vitamins: [
                {
                    name: 'Vitamina A (Betacaroteno)',
                    amount: '14187 IU',
                    dv: '283%'
                },
                {
                    name: 'Vitamina C',
                    amount: '2.4 mg',
                    dv: '4%'
                },
                {
                    name: 'Vitamina B6',
                    amount: '0.2 mg',
                    dv: '15%'
                }
            ]
        },

        healthBenefits: [

            {
                title: 'Saciedade',
                text: 'O teor de fibras pode contribuir para a saciedade dentro de uma alimentação equilibrada.'
            },

            {
                title: 'Fonte de carotenoides',
                text: 'Variedades de polpa alaranjada são fontes importantes de betacaroteno, precursor da vitamina A.'
            },

            {
                title: 'Fonte de energia',
                text: 'Fornece carboidratos que podem contribuir para o fornecimento de energia ao organismo.'
            }

        ],

        weightLossInfo: {
            highCalorie: false,
            helpsSatiety: true,
            suitableForDiet: true,
            increasesEnergyExpenditure: false,
            boostsMetabolism: false,

            mythVsFact: 'A batata-doce não queima gordura por si só. Ela pode fazer parte de uma alimentação voltada ao controle do peso, principalmente quando a porção e o total de calorias da dieta são adequados.'
        },

        whoCanConsume: {

            general: 'Pode fazer parte da alimentação da maioria das pessoas, considerando necessidades individuais e tamanho da porção.',

            diabetics: 'Pessoas com diabetes podem incluir batata-doce na alimentação, mas a quantidade, o preparo e o restante da refeição influenciam a resposta da glicemia.',

            allergies: 'Alergia à batata-doce é incomum, mas pessoas com sintomas após o consumo devem procurar avaliação profissional.'
        },

        caution: {

            level: 'low',

            title: 'Porção e preparo',

            details: 'O impacto glicêmico pode variar conforme variedade, cozimento, resfriamento, processamento e quantidade consumida.'
        },

        foodSafety: {

            freshStatus: 'Firme ao toque, sem áreas muito moles, vazamentos ou sinais de mofo.',

            spoiledStatus: 'Presença de mofo, odor desagradável, líquido anormal ou deterioração extensa.',

            storage: 'Conservar em local fresco, seco, escuro e bem ventilado. Evite ambientes excessivamente úmidos.',

            greenPotatoRisk: 'Não confundir os cuidados da batata-doce com os da batata-inglesa, que possui riscos específicos relacionados a glicoalcaloides.'
        },

        productionTimeline: [

            {
                step: 'Plantio',
                desc: 'Ramas são plantadas em solo adequado e bem drenado.'
            },

            {
                step: 'Crescimento',
                desc: 'As raízes tuberosas se desenvolvem ao longo do ciclo da cultura.'
            },

            {
                step: 'Colheita',
                desc: 'A colheita ocorre quando as raízes atingem tamanho adequado para comercialização.'
            },

            {
                step: 'Distribuição',
                desc: 'Após a colheita, o alimento é selecionado, acondicionado e transportado.'
            }

        ],

        identification: {

            appearance: 'Formato geralmente alongado ou fusiforme.',

            color: 'Pode apresentar pele roxa, avermelhada, marrom, amarela ou clara, dependendo da variedade.',

            texture: 'Firme quando fresca.'
        },

        cookingComparison: [

            {
                mode: 'Cozida',
                note: 'Não exige adição de gordura e pode ser incorporada a diferentes refeições.'
            },

            {
                mode: 'Assada',
                note: 'A concentração de água diminui e o sabor naturalmente adocicado pode ficar mais evidente.'
            },

            {
                mode: 'Frita',
                note: 'A adição de óleo aumenta a densidade energética da preparação.'
            }

        ],

        myths: [

            {
                statement: 'Batata-doce emagrece por si só.',
                verdict: 'MITO',
                explanation: 'Nenhum alimento provoca emagrecimento isoladamente. O controle do peso depende principalmente do balanço energético e do padrão alimentar.'
            },

            {
                statement: 'A batata-doce contém carboidratos.',
                verdict: 'VERDADE',
                explanation: 'A batata-doce é uma fonte de carboidratos e pode fornecer energia para o organismo.'
            }

        ],

        tags: [
            'satiety',
            'low-calorie'
        ]
    },

    // =========================================
    // OVO
    // =========================================

    {
        id: 'ovo-de-galinha',
        name: 'Ovo de Galinha (Inteiro)',
        scientificName: 'Gallus gallus domesticus',
        category: 'Ovos',
        categorySlug: 'ovos',
        origin: 'Sudoeste Asiático (domesticação)',

        image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1000&q=80',

        summary: 'Alimento rico em proteínas, colina, vitaminas e minerais, com elevada densidade nutricional.',

        features: [
            'Proteína de alta qualidade',
            'Rico em colina',
            'Fonte de vitaminas'
        ],

        nutrition: {

            calories: 143,
            proteins: 12.6,
            carbs: 0.7,
            totalSugars: 0.4,
            addedSugars: 0,
            fats: 9.5,
            satFats: 3.1,
            fiber: 0.0,
            sodium: 142,
            potassium: 138,
            calcium: 56,
            iron: 1.75,
            magnesium: 12,
            phosphorus: 198,
            zinc: 1.3,

            vitamins: [

                {
                    name: 'Vitamina B12',
                    amount: '0.89 mcg',
                    dv: '37%'
                },

                {
                    name: 'Vitamina D',
                    amount: '82 IU',
                    dv: '14%'
                },

                {
                    name: 'Vitamina A',
                    amount: '540 IU',
                    dv: '11%'
                }

            ]
        },

        healthBenefits: [

            {
                title: 'Manutenção muscular',
                text: 'Fornece proteínas e aminoácidos essenciais importantes para manutenção e reparação dos tecidos.'
            },

            {
                title: 'Colina',
                text: 'A gema é uma importante fonte de colina, nutriente envolvido em diversas funções celulares e neurológicas.'
            },

            {
                title: 'Nutrientes importantes',
                text: 'O ovo fornece diferentes vitaminas e minerais, incluindo vitamina B12, vitamina A e selênio.'
            }

        ],

        weightLossInfo: {

            highCalorie: false,
            helpsSatiety: true,
            suitableForDiet: true,
            increasesEnergyExpenditure: false,
            boostsMetabolism: false,

            mythVsFact: 'O ovo pode contribuir para a saciedade por fornecer proteínas e gordura, mas não aumenta o metabolismo de maneira relevante por si só.'
        },

        whoCanConsume: {

            general: 'Pode fazer parte de uma alimentação equilibrada para a maioria das pessoas.',

            diabetics: 'Por conter quantidade muito pequena de carboidratos, o ovo geralmente tem pouco impacto direto sobre a glicemia. A refeição completa continua sendo importante.',

            allergies: 'Alergia ao ovo é mais comum em crianças, principalmente às proteínas da clara.'
        },

        caution: {

            level: 'moderate',

            title: 'Segurança alimentar',

            details: 'Ovos crus ou insuficientemente cozidos podem apresentar risco de Salmonella. Pessoas mais vulneráveis devem seguir orientações de segurança alimentar e evitar preparações com ovos crus ou mal cozidos.'
        },

        foodSafety: {

            freshStatus: 'Casca íntegra, limpa e sem rachaduras. A aparência isolada não garante ausência de microrganismos.',

            spoiledStatus: 'Odor desagradável após a abertura, alterações anormais de aparência ou sinais de deterioração indicam descarte.',

            storage: 'Manter refrigerado conforme as orientações da embalagem e evitar oscilações desnecessárias de temperatura.',

            greenPotatoRisk: 'Não se aplica.'
        },

        productionTimeline: [

            {
                step: 'Postura',
                desc: 'O ovo é produzido por galinhas poedeiras.'
            },

            {
                step: 'Classificação',
                desc: 'Os ovos são avaliados e classificados de acordo com padrões comerciais e sanitários.'
            },

            {
                step: 'Embalagem',
                desc: 'São acondicionados para transporte e comercialização.'
            },

            {
                step: 'Distribuição',
                desc: 'Seguem para pontos de venda e consumidores.'
            }

        ],

        identification: {

            appearance: 'Formato ovoidal e casca porosa.',

            color: 'A casca pode ser branca ou marrom, dependendo principalmente da genética da galinha.',

            texture: 'Clara e gema apresentam diferentes consistências quando frescas.'
        },

        cookingComparison: [

            {
                mode: 'Cozido',
                note: 'Não necessita de óleo ou gordura adicionada e permite atingir uma temperatura segura no interior.'
            },

            {
                mode: 'Mexido',
                note: 'Pode ser preparado com pouca gordura e combinado com vegetais ou outros alimentos.'
            },

            {
                mode: 'Frito',
                note: 'A quantidade de gordura e energia adicionadas depende do óleo ou gordura utilizado.'
            }

        ],

        myths: [

            {
                statement: 'Todo consumo de ovo aumenta o colesterol sanguíneo da mesma forma.',
                verdict: 'MITO',
                explanation: 'A resposta ao colesterol alimentar varia entre indivíduos e depende do padrão alimentar como um todo.'
            },

            {
                statement: 'A cor da casca determina se o ovo é mais nutritivo.',
                verdict: 'MITO',
                explanation: 'A cor da casca está principalmente relacionada à genética da galinha e não determina, por si só, maior valor nutricional.'
            }

        ],

        tags: [
            'high-protein',
            'satiety'
        ]
    },

    // =========================================
    // ABACATE
    // =========================================

    {
        id: 'abacate',
        name: 'Abacate',
        scientificName: 'Persea americana',
        category: 'Frutas',
        categorySlug: 'frutas',
        origin: 'México e América Central',

        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1000&q=80',

        summary: 'Fruta rica em gorduras monoinsaturadas, fibras, potássio e diferentes micronutrientes.',

        features: [
            'Gorduras monoinsaturadas',
            'Rico em fibras',
            'Fonte de potássio'
        ],

        nutrition: {

            calories: 160,
            proteins: 2.0,
            carbs: 8.5,
            totalSugars: 0.7,
            addedSugars: 0,
            fats: 14.7,
            satFats: 2.1,
            fiber: 6.7,
            sodium: 7,
            potassium: 485,
            calcium: 12,
            iron: 0.55,
            magnesium: 29,
            phosphorus: 52,
            zinc: 0.6,

            vitamins: [

                {
                    name: 'Vitamina E',
                    amount: '2.07 mg',
                    dv: '14%'
                },

                {
                    name: 'Vitamina K',
                    amount: '21 mcg',
                    dv: '18%'
                },

                {
                    name: 'Folato (B9)',
                    amount: '81 mcg',
                    dv: '20%'
                }

            ]
        },

        healthBenefits: [

            {
                title: 'Gorduras monoinsaturadas',
                text: 'O abacate é fonte de gorduras monoinsaturadas, especialmente ácido oleico.'
            },

            {
                title: 'Fibras',
                text: 'O teor de fibras contribui para a ingestão diária desse nutriente e pode ajudar na saciedade.'
            },

            {
                title: 'Potássio',
                text: 'O abacate fornece potássio, mineral envolvido na função muscular, nervosa e no equilíbrio de fluidos.'
            }

        ],

        weightLossInfo: {

            highCalorie: true,
            helpsSatiety: true,
            suitableForDiet: true,
            increasesEnergyExpenditure: false,
            boostsMetabolism: false,

            mythVsFact: 'O abacate é relativamente calórico, mas pode fazer parte de uma alimentação para controle do peso. A quantidade consumida é importante.'
        },

        whoCanConsume: {

            general: 'Pode fazer parte de uma alimentação equilibrada para a maioria das pessoas.',

            diabetics: 'O abacate possui baixo teor de carboidratos disponíveis e pode ser incluído em diferentes padrões alimentares, considerando a refeição completa.',

            allergies: 'Pessoas com alergia ao látex podem apresentar reação cruzada com alguns alimentos, incluindo o abacate.'
        },

        caution: {

            level: 'low',

            title: 'Densidade calórica',

            details: 'Por ser rico em gordura e energia, porções grandes podem aumentar significativamente o consumo calórico total.'
        },

        foodSafety: {

            freshStatus: 'Deve apresentar aparência compatível com a variedade, sem mofo, vazamentos ou deterioração extensa.',

            spoiledStatus: 'Odor desagradável, mofo, líquido anormal ou polpa extensamente deteriorada indicam descarte.',

            storage: 'Frutos verdes podem amadurecer em temperatura ambiente. Após maduros, podem ser refrigerados para retardar o amadurecimento.',

            greenPotatoRisk: 'Não se aplica.'
        },

        productionTimeline: [

            {
                step: 'Cultivo',
                desc: 'O abacateiro é cultivado principalmente em regiões tropicais e subtropicais.'
            },

            {
                step: 'Desenvolvimento',
                desc: 'Os frutos se desenvolvem na árvore durante o ciclo produtivo.'
            },

            {
                step: 'Colheita',
                desc: 'Os frutos podem ser colhidos antes de estarem completamente maduros.'
            },

            {
                step: 'Maturação',
                desc: 'O amadurecimento normalmente continua após a colheita.'
            }

        ],

        identification: {

            appearance: 'Pode apresentar formato oval, arredondado ou semelhante a uma pera, dependendo da variedade.',

            color: 'A casca varia de verde a verde-escura ou quase preta.',

            texture: 'A polpa madura apresenta textura cremosa.'
        },

        cookingComparison: [

            {
                mode: 'In natura',
                note: 'É uma forma simples de consumir o alimento sem adicionar outros ingredientes.'
            },

            {
                mode: 'Guacamole',
                note: 'Pode ser combinado com vegetais, ervas e temperos, aumentando a variedade da refeição.'
            },

            {
                mode: 'Aquecido',
                note: 'Pode ser utilizado em algumas preparações, embora o aquecimento possa alterar textura e sabor.'
            }

        ],

        myths: [

            {
                statement: 'Abacate engorda e deve ser eliminado da dieta.',
                verdict: 'MITO',
                explanation: 'O abacate é calórico, mas não precisa ser eliminado. Pode fazer parte de uma alimentação equilibrada quando consumido em porções adequadas.'
            }

        ],

        tags: [
            'high-fiber',
            'satiety'
        ]
    }

];


// =========================================
// CATEGORIAS
// =========================================

const CATEGORIES = [

    {
        name: 'Frutas',
        slug: 'frutas',
        icon: 'apple'
    },

    {
        name: 'Verduras',
        slug: 'verduras',
        icon: 'salad'
    },

    {
        name: 'Legumes',
        slug: 'legumes',
        icon: 'carrot'
    },

    {
        name: 'Cereais',
        slug: 'cereais',
        icon: 'wheat'
    },

    {
        name: 'Carnes',
        slug: 'carnes',
        icon: 'drumstick'
    },

    {
        name: 'Peixes',
        slug: 'peixes',
        icon: 'fish'
    },

    {
        name: 'Ovos',
        slug: 'ovos',
        icon: 'egg'
    },

    {
        name: 'Laticínios',
        slug: 'laticinios',
        icon: 'milk'
    },

    {
        name: 'Oleaginosas',
        slug: 'oleaginosas',
        icon: 'nut'
    },

    {
        name: 'Leguminosas',
        slug: 'leguminosas',
        icon: 'bean'
    },

    {
        name: 'Industrializados',
        slug: 'industrializados',
        icon: 'package'
    },

    {
        name: 'Bebidas',
        slug: 'bebidas',
        icon: 'coffee'
    }

];
