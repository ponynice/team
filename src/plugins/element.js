import Vue from 'vue'
import {Button,Row,Container,Main,Footer,Header,Col,Link,Form,FormItem,Input,Message,Table,TableColumn,MessageBox} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Link)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message