import { leven } from './levenshtein'

import { track, LightningElement } from 'lwc'

export default class LevenshteinExample extends LightningElement {
    
    @track result = '(input two words)'

    handleChange(event){

        this[event.target.name] = event.target.value

        if(this.string_1 !== undefined && this.string_2 !== undefined){
            this.result = leven(this.string_1, this.string_2)    
        }
    }
}