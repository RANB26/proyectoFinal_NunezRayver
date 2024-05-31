export class Camisa{
    public codCamisa: number;
    public codMarcaCamisa: string;
    public tallaCamisa: string;
    public colorCamisa: string;
    public precioCamisa: number;
    public imagenCamisa: string;
    public imagenCamisaBase64: string;

    constructor(codc: number, marc: string, tal: string, col: string, pre: number, imag: string, base: string){
        this.codCamisa = codc;
        this.codMarcaCamisa = marc;
        this.tallaCamisa = tal;
        this.colorCamisa =  col;
        this.precioCamisa =  pre;
        this.imagenCamisa = imag;
        this.imagenCamisaBase64 = base;
    }
}