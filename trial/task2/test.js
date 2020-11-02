const input = [
    'block_mod__elem',
    'block_mod_mod__elem',
    'block__elem_mod_mod',
]

const output = [
    {  
        mod: "__", // разделитель для модификатора  
        elem: "_", // разделитель для элемента  
      },
      {  
        mod: "_", // разделитель для модификатора  
        elem: "__", // разделитель для элемента  
      },
      {  
        mod: "_", // разделитель для модификатора  
        elem: "__", // разделитель для элемента  
      },
      
]

module.exports = {input, output}