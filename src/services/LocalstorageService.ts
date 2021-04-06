import { INITIAL_STATE } from "../store";

class LocalstorageService {

  private reset(){
    this.saveState(INITIAL_STATE);
  }

  loadState(): any{
    const dataString = localStorage.getItem("state");
    if(dataString) {
      try {
        return JSON.parse(dataString);
      }catch{
        console.error("Local state was corrupted, resetting and starting clean.")
      }
    }else{
      console.log("No saved state found, starting clean.");
    }
    this.reset();
    return {};
  }
  saveState(data: any){
    const dataString = JSON.stringify(data);
    return localStorage.setItem("state", dataString);
  }

}

export default new LocalstorageService();