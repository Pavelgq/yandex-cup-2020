const input = [  
    "GALAXY-42/SYSTEM/PLANET:{}",  
    "GALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/System/PLANET:{Code}",  
    "GALAXY-42/SYSTEM/PLANET{Code}",  
    "LONGGALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-4/SYSTEM/PLANET:{Code}",  
    "GALAXY-4815162342/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/SYSTEM1/PLANET:{Code}",  
    "GALAXY-42/SYS--TEM/PLANET:{Code}",  
    "GALAXY-42/LANGUAGE/JAVA:{Code}",  
    "GALAXY-42/LANGUAGE/SCALA:{Code}",  
    "GALAXY-42/LANGUAGE/JS:{Code}",  
    "GALAXY-42/LANGUAGE/PYTHON:{Code}",  
    "GALAXY-42/SYSTEM/PLANET:{Simple text... @null == undefined@}",  
    "GALAXY-42/SYSTEM/PLANET:{@typeof null@@typeof typeof null@}"  
];

const output = [  
    "GALAXY-42/SYSTEM/PLANET:{}",  
    "GALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/LANGUAGE/JS:{Code}",  
    "GALAXY-42/LANGUAGE/PYTHON:{Code}",  
    "GALAXY-42/SYSTEM/PLANET:{Simple text... <spam>null == undefined</spam>}",  
    "GALAXY-42/SYSTEM/PLANET:{<spam>typeof null</spam><spam>typeof typeof null</spam>}"  
]

module.exports = {input, output};