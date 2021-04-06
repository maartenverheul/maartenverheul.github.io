import Runnable from './Runnable';

export default class Open implements Runnable {
  
  run(...args: string[]): void {
    throw new Error('Method not implemented.');
  }
}