import axios from "axios";
import {onMounted, ref} from "vue";
import templateData from '../../static/data.json';

export function useDataGrid() {
    const data = ref({})
    const isDataLoading = ref(true)
    let checkRequest = false

    // const response = {
    //     data: {
    //         columns: [
    //             {
    //                 id: 'factory',
    //                 value: 'Завод',
    //                 type: 'string',
    //                 sort: 200,
    //
    //             },
    //             {
    //                 id: 'sales-area',
    //                 value: 'Район сбыта',
    //                 type: 'string',
    //                 sort: 300,
    //
    //             },
    //             {
    //                 id: 'conditions',
    //                 value: 'Условия поставки',
    //                 type: 'string',
    //                 sort: 400,
    //
    //             },
    //             {
    //                 id: 'transition',
    //                 value: 'Станция перехода',
    //                 type: 'string',
    //                 sort: 500,
    //
    //             },
    //             {
    //                 id: 'contract',
    //                 value: 'Контракт',
    //                 type: 'string',
    //                 sort: 600,
    //
    //             },
    //             {
    //                 id: 'consignee',
    //                 value: 'Грузополучатель',
    //                 type: 'string',
    //                 sort: 700,
    //
    //             },
    //             {
    //                 id: 'route',
    //                 value: 'Маршрут',
    //                 type: 'string',
    //                 sort: 800,
    //
    //             }
    //         ],
    //         columnsSubRow: [
    //             {
    //                 id: 'product',
    //                 type: 'grow'
    //             },
    //             {
    //                 id: 'volume',
    //                 type: 'shrink'
    //             },
    //             {
    //                 id: 'distributed',
    //                 type: 'shrink'
    //             },
    //             {
    //                 id: 'remainder',
    //                 type: 'shrink'
    //             }
    //         ],
    //         rows: [
    //             {
    //                 id: '01',
    //                 type: 'row',
    //                 checked: false,
    //                 values: [
    //                     {
    //                         name: 'factory',
    //                         value: 'ННПЗ',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'sales-area',
    //                         value: 'Мексика',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'conditions',
    //                         value: 'СТР',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'transition',
    //                         value: 'ст. Кеница',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'contract',
    //                         value: '06L0027',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'consignee',
    //                         value: 'EOOD Debitor KCCC 118536 Neft Test Rout 1 код 1646653',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'route',
    //                         value: '',
    //                         type: 'string'
    //                     }
    //                 ],
    //                 subRows: [
    //                     {
    //                         id: '01-1',
    //                         type: 'sub-row',
    //                         checked: false,
    //                         values: [
    //                             {
    //                                 name: 'product',
    //                                 value: 'Масло Л-СУПЕР, 15/440, СЕ-4/5С; к. 5л.',
    //                                 type: 'string'
    //                             },
    //                             {
    //                                 name: 'volume',
    //                                 title: 'Объем',
    //                                 value: 20,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'distributed',
    //                                 title: 'Распределено',
    //                                 value: 0,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'remainder',
    //                                 title: 'Остаток',
    //                                 value: 20,
    //                                 type: 'number'
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         id: '01-2',
    //                         type: 'sub-row',
    //                         checked: false,
    //                         values: [
    //                             {
    //                                 name: 'product',
    //                                 value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
    //                                 type: 'string'
    //                             },
    //                             {
    //                                 name: 'volume',
    //                                 title: 'Объем',
    //                                 value: 61,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'distributed',
    //                                 title: 'Распределено',
    //                                 value: 0,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'remainder',
    //                                 title: 'Остаток',
    //                                 value: 61,
    //                                 type: 'number'
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         id: '01-3',
    //                         type: 'sub-row',
    //                         checked: false,
    //                         values: [
    //                             {
    //                                 name: 'product',
    //                                 value: 'Масло готовое 1040, к.4л',
    //                                 type: 'string'
    //                             },
    //                             {
    //                                 name: 'volume',
    //                                 title: 'Объем',
    //                                 value: 69.225,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'distributed',
    //                                 title: 'Распределено',
    //                                 value: 0,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'remainder',
    //                                 title: 'Остаток',
    //                                 value: 69.225,
    //                                 type: 'number'
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: '02',
    //                 type: 'row',
    //                 checked: false,
    //                 values: [
    //                     {
    //                         name: 'factory',
    //                         value: 'ННПЗ',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'sales-area',
    //                         value: 'Дальнее зарубежье',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'conditions',
    //                         value: 'СТР',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'transition',
    //                         value: 'ст. Васильева',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'contract',
    //                         value: '06L0027',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'consignee',
    //                         value: '',
    //                         type: 'string'
    //                     },
    //                     {
    //                         name: 'route',
    //                         value: '',
    //                         type: 'string'
    //                     }
    //                 ],
    //                 subRows: [
    //                     {
    //                         id: '02-1',
    //                         type: 'sub-row',
    //                         checked: false,
    //                         values: [
    //                             {
    //                                 name: 'product',
    //                                 value: 'Масло готовое, 5/40, к. 1л.',
    //                                 type: 'string'
    //                             },
    //                             {
    //                                 name: 'volume',
    //                                 title: 'Объем',
    //                                 value: 20,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'distributed',
    //                                 title: 'Распределено',
    //                                 value: 0,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'remainder',
    //                                 title: 'Остаток',
    //                                 value: 20,
    //                                 type: 'number'
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         id: '02-2',
    //                         type: 'sub-row',
    //                         checked: false,
    //                         values: [
    //                             {
    //                                 name: 'product',
    //                                 value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
    //                                 type: 'string'
    //                             },
    //                             {
    //                                 name: 'volume',
    //                                 title: 'Объем',
    //                                 value: 61,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'distributed',
    //                                 title: 'Распределено',
    //                                 value: 0,
    //                                 type: 'number'
    //                             },
    //                             {
    //                                 name: 'remainder',
    //                                 title: 'Остаток',
    //                                 value: 61,
    //                                 type: 'number'
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                     id: '03',
    //                     type: 'row',
    //                     checked: false,
    //                     values: [
    //                         {
    //                             name: 'factory',
    //                             value: 'ННПЗ',
    //                             type: 'string'
    //                         },
    //                         {
    //                             name: 'sales-area',
    //                             value: 'Бангладеш',
    //                             type: 'string'
    //                         },
    //                         {
    //                             name: 'conditions',
    //                             value: 'YYY',
    //                             type: 'string'
    //                         },
    //                         {
    //                             name: 'transition',
    //                             value: 'Дрогобычский НПЗ',
    //                             type: 'string'
    //                         },
    //                         {
    //                             name: 'contract',
    //                             value: '06L0027',
    //                             type: 'string',
    //
    //                         },
    //                         {
    //                             name: 'consignee',
    //                             value: '',
    //                             type: 'string'
    //                         },
    //                         {
    //                             name: 'route',
    //                             value: '',
    //                             type: 'string'
    //                         }
    //                     ],
    //                     subRows: [
    //                         {
    //                             id: '03-1',
    //                             type: 'sub-row',
    //                             checked: false,
    //                             values: [
    //                                 {
    //                                     name: 'product',
    //                                     value: 'Масло Л-СУПЕР, 15/440, СЕ-4/5С; к. 5л.',
    //                                     type: 'string'
    //                                 },
    //                                 {
    //                                     name: 'volume',
    //                                     title: 'Объем',
    //                                     value: 20,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'distributed',
    //                                     title: 'Распределено',
    //                                     value: 0,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'remainder',
    //                                     title: 'Остаток',
    //                                     value: 20,
    //                                     type: 'number'
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             id: '03-2',
    //                             type: 'sub-row',
    //                             checked: false,
    //                             values: [
    //                                 {
    //                                     name: 'product',
    //                                     value: 'Масло ЛУКОЙЛ ТМ-4-12, 80485, 1-4; к.4л',
    //                                     type: 'string'
    //                                 },
    //                                 {
    //                                     name: 'volume',
    //                                     title: 'Объем',
    //                                     value: 61,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'distributed',
    //                                     title: 'Распределено',
    //                                     value: 0,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'remainder',
    //                                     title: 'Остаток',
    //                                     value: 61,
    //                                     type: 'number'
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             id: '03-3',
    //                             type: 'sub-row',
    //                             checked: false,
    //                             values: [
    //                                 {
    //                                     name: 'product',
    //                                     value: 'Масло готовое 1040, к. 1л.',
    //                                     type: 'string'
    //                                 },
    //                                 {
    //                                     name: 'volume',
    //                                     title: 'Объем',
    //                                     value: 15.3816,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'distributed',
    //                                     title: 'Распределено',
    //                                     value: 0,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'remainder',
    //                                     title: 'Остаток',
    //                                     value: 15.3816,
    //                                     type: 'number'
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             id: '03-4',
    //                             type: 'sub-row',
    //                             checked: false,
    //                             values: [
    //                                 {
    //                                     name: 'product',
    //                                     value: 'Масло готовое, 5/40, к. 1л.',
    //                                     type: 'string'
    //                                 },
    //                                 {
    //                                     name: 'volume',
    //                                     title: 'Объем',
    //                                     value: 10,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'distributed',
    //                                     title: 'Распределено',
    //                                     value: 0,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'remainder',
    //                                     title: 'Остаток',
    //                                     value: 10,
    //                                     type: 'number'
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             id: '03-5',
    //                             type: 'sub-row',
    //                             checked: false,
    //                             values: [
    //                                 {
    //                                     name: 'product',
    //                                     value: 'Масло готовое 1040, к. 1л.',
    //                                     type: 'string'
    //                                 },
    //                                 {
    //                                     name: 'volume',
    //                                     title: 'Объем',
    //                                     value: 69.225,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'distributed',
    //                                     title: 'Распределено',
    //                                     value: 0,
    //                                     type: 'number'
    //                                 },
    //                                 {
    //                                     name: 'remainder',
    //                                     title: 'Остаток',
    //                                     value: 69.225,
    //                                     type: 'number'
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //         ]
    //     }
    // }
    // data.value = response.data
    // isDataLoading.value = false

    const fetching = async () => {
        try {
            const response = await axios.get('https://blog.project-srv.site/?get_json=y')
            checkRequest = true
            // console.log('response', response)
            data.value = response.data
        } catch {
            // alert('Ошибка запроса!')
            console.log('Ошибка запроса!')
        } finally {
            // if (!checkRequest) data.value = templateData
            isDataLoading.value = false
        }
    }
    onMounted(fetching)

    return {
        data, isDataLoading
    }
}