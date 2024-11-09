export const model1 = {
    panels: [
        {
            type: 'panel',
            name: 'panel1',
            width: '100',
            height: '100',
            cssData: 'panel_style_1'
        },
        {
            type: 'panel',
            name: 'panel2',
            width: '100',
            height: '100',
            cssData: 'panel_style_2'
        }
    ],
    components: [
        {
            type: 'div',
            name: 'div_panel1_1',
            father: 'panel1',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel2_1',
            father: 'panel2',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel2_2',
            father: 'panel2',
            position: '0,0'
        }
    ]
};