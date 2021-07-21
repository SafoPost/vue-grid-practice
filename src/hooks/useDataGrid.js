import axios from "axios";
import {onMounted, ref} from "vue";

export function useDataGrid(withCheck = false, withEdit = false) {
    const data = ref({})
    const isDataLoading = ref(true)

    const fetching = () => {

    }

    const response = {
        data: {
            columns: [
                    {
                        name: 'factory',
                        value: 'Завод',
                        type: 'string',
                        sort: 200,
                        
                    },
                    {
                        name: 'sales-area',
                        value: 'Район сбыта',
                        type: 'string',
                        sort: 300,
                        
                    },
                    {
                        name: 'conditions',
                        value: 'Условия поставки',
                        type: 'string',
                        sort: 400,
                        
                    },
                    {
                        name: 'transition',
                        value: 'Станция перехода',
                        type: 'string',
                        sort: 500,
                        
                    },
                    {
                        name: 'contract',
                        value: 'Контракт',
                        type: 'string',
                        sort: 600,
                        
                    },
                    {
                        name: 'consignee',
                        value: 'Грузополучатель',
                        type: 'string',
                        sort: 700,
                        
                    },
                    {
                        name: 'route',
                        value: 'Маршрут',
                        type: 'string',
                        sort: 800,
                        
                    }
                ],
            rows: [
                    {
                        id: '01',
                        type: 'row',
                        checked: false,
                        values: [
                            {
                                name: 'factory',
                                value: 'ННПЗ',
                                type: 'string'
                            },
                            {
                                name: 'sales-area',
                                value: 'Мексика',
                                type: 'string'
                            },
                            {
                                name: 'conditions',
                                value: 'СТР',
                                type: 'string'
                            },
                            {
                                name: 'transition',
                                value: 'ст. Кеница',
                                type: 'string'
                            },
                            {
                                name: 'contract',
                                value: '06L0027',
                                type: 'string'
                            },
                            {
                                name: 'consignee',
                                value: 'EOOD Debitor KCCC 118536 Neft Test Rout 1 код 1646653',
                                type: 'string'
                            },
                            {
                                name: 'route',
                                value: '',
                                type: 'string'
                            }
                        ],
                        subRows: [
                            {
                                id: '01-1',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло Л-СУПЕР, 15/440, СЕ-4/5С; к. 5л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 20,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 20,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '01-2',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 61,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 61,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '01-3',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло готовое 1040, к.4л',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 69.225,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 69.225,
                                        type: 'number'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '02',
                        type: 'row',
                        checked: false,
                        values: [
                            {
                                name: 'factory',
                                value: 'ННПЗ',
                                type: 'string'
                            },
                            {
                                name: 'sales-area',
                                value: 'Дальнее зарубежье',
                                type: 'string'
                            },
                            {
                                name: 'conditions',
                                value: 'СТР',
                                type: 'string'
                            },
                            {
                                name: 'transition',
                                value: 'ст. Васильева',
                                type: 'string'
                            },
                            {
                                name: 'contract',
                                value: '06L0027',
                                type: 'string'
                            },
                            {
                                name: 'consignee',
                                value: '',
                                type: 'string'
                            },
                            {
                                name: 'route',
                                value: '',
                                type: 'string'
                            }
                        ],
                        subRows: [
                            {
                                id: '02-1',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло готовое, 5/40, к. 1л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 20,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 20,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '02-2',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 61,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 61,
                                        type: 'number'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '03',
                        type: 'row',
                        checked: false,
                        values: [
                            {
                                name: 'factory',
                                value: 'ННПЗ',
                                type: 'string'
                            },
                            {
                                name: 'sales-area',
                                value: 'Бангладеш',
                                type: 'string'
                            },
                            {
                                name: 'conditions',
                                value: 'YYY',
                                type: 'string'
                            },
                            {
                                name: 'transition',
                                value: 'Дрогобычский НПЗ',
                                type: 'string'
                            },
                            {
                                name: 'contract',
                                value: '06L0027',
                                type: 'string',
                                
                            },
                            {
                                name: 'consignee',
                                value: '',
                                type: 'string'
                            },
                            {
                                name: 'route',
                                value: '',
                                type: 'string'
                            }
                        ],
                        subRows: [
                            {
                                id: '03-1',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло Л-СУПЕР, 15/440, СЕ-4/5С; к. 5л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 20,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 20,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '03-2',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 61,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 61,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '03-3',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло готовое 1040, к. 1л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 15.3816,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 15.3816,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '03-4',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло готовое, 5/40, к. 1л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 10,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 10,
                                        type: 'number'
                                    }
                                ]
                            },
                            {
                                id: '03-5',
                                type: 'sub-row',
                                checked: false,
                                values: [
                                    {
                                        name: 'product',
                                        value: 'Масло готовое 1040, к. 1л.',
                                        type: 'string',
                                        colspan: 3
                                    },
                                    {
                                        name: 'volume',
                                        title: 'Объем',
                                        value: 69.225,
                                        type: 'number'
                                    },
                                    {
                                        name: 'distributed',
                                        title: 'Распределено',
                                        value: 0,
                                        type: 'number'
                                    },
                                    {
                                        name: 'remainder',
                                        title: 'Остаток',
                                        value: 69.225,
                                        type: 'number'
                                    }
                                ]
                            }
                        ]
                    }
                ]
        }
    }

    data.value = response.data

    isDataLoading.value = false

    // onMounted(fetching)

    // console.log("полученные данные", data.value)

    return {
        data, withCheck, withEdit, isDataLoading
    }
}