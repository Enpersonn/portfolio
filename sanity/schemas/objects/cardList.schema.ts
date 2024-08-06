import { defineField, defineType } from "sanity";


const card = defineType({
    name: 'card',
    title: 'Card',
    type: 'object',
    fields: [
        {

            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
        }
    ]
})

export const cardList = defineType({
    name: 'cardList',
    title: 'Card List',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: ['largeIcon', 'simple'],
                layout: 'radio',
            },
            initialValue: 'largeIcon'
        },
        {
            name: 'cards',
            type: 'array',
            of: [{ type: 'object', fields: card.fields }]
        }

    ]


})