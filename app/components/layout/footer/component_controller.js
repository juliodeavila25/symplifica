import ApplicationController from '../../../javascript/controllers/application_controller'
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
        return [ "funcionalities","solutions", "languages" ]
      }

    connect () {
        super.connect()
        console.log('connect footer')
    }

    

    goTop(){
        window.scrollTo(0, 0);
    }
    
}