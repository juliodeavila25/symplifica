import ApplicationController from '../../javascript/controllers/application_controller'
//import {Controller} from "stimulus"
//import consumer from "channels/consumer";

/* This is the custom StimulusReflex controller for the Example Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    /*
     * Regular Stimulus lifecycle methods
     * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
     *
     * If you intend to use this controller as a regular stimulus controller as well,
     * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
     *
     * Important:
     * By default, StimulusReflex overrides the -connect- method so make sure you
     * call super if you intend to do anything else when this controller connects.
    */

    static get targets() {
        return [ "arrow", "content", "arrowA", "contentA" , "arrowB", "contentB", "arrowC", "contentC", "arrowD", "contentD", "arrowE", "contentE", "arrowF", "contentF", "arrowG", "contentG", "arrowH", "contentH"  ]
      }

    connect () {
        super.connect()
        console.log('connect acordion')
        //this.prepareLoadMoreOnPreviousIncidences()
    }

    actionAccordion(event){
        event.preventDefault();
        if(this.arrowTarget.classList.contains("chevron-right")){
            this.arrowTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowTarget.classList.add("chevron-down", "text-escala-orange")
            this.contentTarget.classList.remove('hidden')
        }else{
            this.arrowTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowTarget.classList.remove("chevron-down", "text-escala-orange")
            this.contentTarget.classList.add('hidden')
        }
    }

    actionAccordionA(event){
        event.preventDefault()
        if(this.arrowATarget.classList.contains("chevron-right")){
            this.arrowATarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowATarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentATarget.classList.remove('hidden')
        }else{
            this.arrowATarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowATarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentATarget.classList.add('hidden')
        }
    }
    actionAccordionB(event){
        event.preventDefault();
        if(this.arrowBTarget.classList.contains("chevron-right")){
            this.arrowBTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowBTarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentBTarget.classList.remove('hidden')
        }else{
            this.arrowBTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowBTarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentBTarget.classList.add('hidden')
        }
    }
    actionAccordionC(event){
        event.preventDefault();
        if(this.arrowCTarget.classList.contains("chevron-right")){
            this.arrowCTarget.classList.remove("chevron-right", "text-white")
            //this.arrowCTarget.classList.add("fa-chevron-down", "text-white")
            this.contentCTarget.classList.remove('hidden')
        }else{
            this.arrowCTarget.classList.add("chevron-right", "text-white")
            //this.arrowCTarget.classList.remove("fa-chevron-down", "text-white")
            this.contentCTarget.classList.add('hidden')
        }
    }
    actionAccordionD(event){
        event.preventDefault();
        if(this.arrowDTarget.classList.contains("chevron-right")){
            this.arrowDTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowDTarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentDTarget.classList.remove('hidden')
        }else{
            this.arrowDTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowDTarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentDTarget.classList.add('hidden')
        }
    }
    actionAccordionE(event){
        event.preventDefault();
        if(this.arrowETarget.classList.contains("chevron-right")){
            this.arrowETarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowETarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentETarget.classList.remove('hidden')
        }else{
            this.arrowETarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowETarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentETarget.classList.add('hidden')
        }
    }
    actionAccordionF(event){
        event.preventDefault();
        if(this.arrowFTarget.classList.contains("chevron-right")){
            this.arrowFTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowFTarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentFTarget.classList.remove('hidden')
        }else{
            this.arrowFTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowFTarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentFTarget.classList.add('hidden')
        }
    }
    actionAccordionG(event){
        event.preventDefault();
        if(this.arrowGTarget.classList.contains("chevron-right")){
            this.arrowGTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowGTarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentGTarget.classList.remove('hidden')
        }else{
            this.arrowGTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowGTarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentGTarget.classList.add('hidden')
        }
    }
    actionAccordionH(event){
        event.preventDefault();
        if(this.arrowHTarget.classList.contains("chevron-right")){
            this.arrowHTarget.classList.remove("chevron-right", "text-escala-bluet")
            //this.arrowHTarget.classList.add("fa-chevron-down", "text-escala-orange")
            this.contentHTarget.classList.remove('hidden')
        }else{
            this.arrowHTarget.classList.add("chevron-right", "text-escala-bluet")
            //this.arrowHTarget.classList.remove("fa-chevron-down", "text-escala-orange")
            this.contentHTarget.classList.add('hidden')
        }
    }
}