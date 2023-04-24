export interface Driver {   //Es una contrato que espoecifica un comportamiento con pre y post condiciones
  dataBase: string;
  password: string;
  port: number;

  connect(): void;    //Comportamiento
  disconnect(): void;
  isConnected(): boolean;
}

//Clases que implementan a la interfaz Drive
class PostgresDrive implements Driver{
  dataBase: string;
  password: string;
  port: number;
  constructor(dataBase: string, password: string, port: number) {
    this.dataBase = dataBase;
    this.password = password;
    this.port = port;
  }
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isConnected(): boolean {
    //code
    return true;
  }
}

class OracleDriver implements Driver {
  dataBase: string;
  password: string;
  port: number;
  constructor(dataBase: string, password: string, port: number) {
    this.dataBase = dataBase;
    this.password = password;
    this.port = port;
  }
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isConnected(): boolean {
    //code
    return true;
  }
}

