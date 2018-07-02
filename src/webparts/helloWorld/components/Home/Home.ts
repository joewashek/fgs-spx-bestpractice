import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
//import styles from './Home.module.scss';

@Component
export default class Home extends Vue{

    //public homeTitle: string = 'Home Template Title';
    //public get styles(): { [key: string]: string } {
        //return styles;
    //}
    public created(): void {
        console.log('created home!');
    }
}