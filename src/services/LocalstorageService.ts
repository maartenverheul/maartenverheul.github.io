class LocalstorageService {

  private static readonly REPOWERTIMEOUT = 1000 * 60 * 24;

  private boolToString(value: boolean): string {
    return value ? "true" : "false";
  }

  getLastPoweredDate(): number {
    let date = localStorage.getItem("lastPowered");
    return parseInt(date||"0");
  }
  mustRepower(): boolean {
    return Date.now() - this.getLastPoweredDate() > LocalstorageService.REPOWERTIMEOUT;
  }
  getPowered(): boolean { 
    return localStorage.getItem("powered") === "true" && !this.mustRepower()
  }
  setPowered(value: boolean): void { 
    localStorage.setItem("powered", this.boolToString(value));
    if(value) localStorage.setItem("lastPowered", Date.now().toString());
  }

}

export default new LocalstorageService();