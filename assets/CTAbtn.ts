import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('CTAbtn')
export class CTAbtn extends Component {
    onClickCTA() {
        window.open("https://www.google.com", "_blank"); 
    }
}
