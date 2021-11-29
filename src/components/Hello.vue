<template>
        <div class="bg">
            <div class="background">
                <img src="../assets/background.png" />
            </div>
            <div class="back" @click="back">
                <img src="../assets/返回.png" width="100%" height="100%" alt=""/>
            </div>
            <div class="顶栏">
                <div class="摘要顶栏">
                    <img src="../assets/摘要顶栏.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="云视界服务平台">
                    <img src="../assets/云视界服务平台.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="数字交通">
                    <img src="../assets/数字交通.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="违章分析">
                    <img src="../assets/违章分析.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="大数据">
                    <img src="../assets/大数据.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="智慧城市">
                    <img src="../assets/智慧城市.png" width="100%" height="100%" alt=""/>
                </div>
            </div>
            <div class="摘要列表图" modal-append-to-body="false">
                <div class="摘要列表">
                    <img src="../assets/摘要列表.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="框框1">
                    <img src="../assets/框框.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="表项框1">
                    <div class="表项框">
                        <img src="../assets/表项框.png" width="100%" height="100%" alt=""/>
                    </div>
                    <div class="序号">
                        <img src="../assets/序号.png" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div class="表项框2">
                    <div class="表项框">
                        <img src="../assets/表项框.png" width="100%" height="100%" alt=""/>
                    </div>
                    <div class="时间">
                        <img src="../assets/时间.png" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div class="表项框3">
                    <div class="表项框">
                        <img src="../assets/表项框.png" width="100%" height="100%" alt=""/>
                    </div>
                    <div class="地点">
                        <img src="../assets/地点.png" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div class="表项框4">
                    <div class="表项框">
                        <img src="../assets/表项框.png" width="100%" height="100%" alt=""/>
                    </div>
                    <div class="操作">
                        <img src="../assets/操作.png" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div class="table">
                    <el-table :row-style="getRowClass" :header-cell-style="getRowClass" 
                    :data="tableData" style="width=100%;background-color=transparent;" :show-header="false" >
                        <el-table-column label="序号" width="120" align="center">
                            <template slot-scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.id }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="日期" width="200" align="center">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="地址" width="180" align="center">
                            <template slot-scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.address }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="165" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="Check(scope.row)">查看</el-button>
                                <el-button type="primary" size="mini" @click="Download(scope.row)">下载</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="统计图">
                <div class="同比信息">
                    <img src="../assets/同比信息.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="框框2">
                    <img src="../assets/框框.png" width="100%" height="100%" alt=""/>
                </div>
                <div class="统计">
                    <img src="../assets/统计.png" width="100%" height="100%" alt=""/>
                </div>
            </div>
            <div class="曲线图">
                    <img src="../assets/曲线图.png" width="100%" height="100%" alt=""/>
            </div>
        </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id: '001',
            date: '2021-11-17 03:16:57',
            address: '福大学生街'
          }, {
            id: '002',
            date: '2021-11-17 07:56:30',
            address: '福大学生街'
          }]
        }
        },
        methods: {
            back(){
                this.$router.push('/already_login')
            },
            getRowClass({ row, column, rowIndex, columnIndex }) {
                return "background-color:transparent";
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            check(row){

            },
            Download(row){
                if(row.downloadRoute == null){
                    this.$message({
                        message: "下载失败",
                        type: "warning",
                    });
                    return;
                }
                this.ishowLoding = true;
                const params = {
                    id: row.id,
                    uuid: new Date().getTime(),
                };
                downloadFile(params)
                    .then((res) => {
                        this.ishowLoding = false
                        let token = res.data.data.token;
                        let url = res.data.data.url + "&token=" + token;
                        window.open(url);
                    })
                    .catch((err) => {
                        this.ishowLoding = false;
                    })
            },
            Check(row){
            if(row.downloadRoute == null){
              this.$message({
                message: "查看失败",
                type: "warning",
              });
              return;
            }
            this.ishowLoding = true;
            const params = {
              id: row.id,
              uuid: new Date().getTime(),
            };
            downloadFile(params)
              .then((res) => {
                this.ishowLoding = false
                let token = res.data.data.token;
                let url = res.data.data.url + "&token=" + token;
                window.open(url);
              })
              .catch((err) => {
                this.ishowLoding = false;
              })
          }
        }


    }
    export const downloadFile = (data) => request({
        url: 'http://124.70.131.56:5003/download',
        method: 'get',
        params: data,
    })
</script>
<style>
  .el-table{
        color:rgb(41, 180, 223);
        height:  520px;
        background-color: transparent !important;
        z-index: 10;
        
    }
   .el-table::before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
        z-index: 10;
    }
   .el-table__row>td{
        border: none;
        z-index: 10;
        background-color: transparent !important;
    }
    .el-table th.is-leaf{
        border: none;
        z-index: 10;
    }
    .el-table th, .el-table tr,.el-table td{
        border: 0;
        background-color: transparent !important;
        text-align: center;
        z-index: 10;
    }
    /deep/ .el-table tr {
    background-color: transparent!important;
}
/deep/  .el-table--enable-row-transition .el-table__body td, .el-table .cell{
   background-color: transparent !important;
}
/deep/.el-table--fit {
    background-color: transparent !important;
}
    .bg{
        width: 100%;
        height: 100%;
        top: 0pt;
        left: 0pt;
        position: fixed;
        background-size: 100%;
    }
    .background{
        width:100%;  
        height:100%;  /**宽高100%是为了图片铺满屏幕 */
        z-index:-1;
        position: absolute;
    }
    .back{
        right: 30pt;
        top: 10pt;
        width: 50pt;
        height: 50pt;
        z-index: 1;
        position: fixed;
        background-size: 50pt 50pt;
    }
    .顶栏{
        width: 100%;
        height: 100%;
        top: 0pt;
        position: fixed;
    }
    .摘要顶栏{
        top: 0pt;
        left: 0pt;
        width: 80%;
        height: 60pt;
        position: fixed;
        z-index: 1;
    }
    .云视界服务平台{
        left: 15pt;
        top: 15pt;
        width: 140pt;
        height: 20pt;
        position: absolute;
        z-index: 1;
        background-size: 100%;
    }
    .数字交通{
        left: 250pt;
        top: 12pt;
        width: 80pt;
        height: 20pt;
        position: fixed;
        z-index: 1;
    }
    .违章分析{
        left: 400pt;
        top: 12pt;
        width: 80pt;
        height: 20pt;
        position: fixed;
        z-index: 1;
    }
    .大数据{
        left: 550pt;
        top: 12pt;
        width: 60pt;
        height: 20pt;
        position: fixed;
        z-index: 1;
    }
    .智慧城市{
        left: 700pt;
        top: 12pt;
        width: 80pt;
        height: 20pt;
        position: fixed;
        z-index: 1;
    }
    .摘要列表图{
        width: 500pt;
        height: 500pt;
        left: 5%;
        padding-top: 100pt;
        position: absolute;
        z-index: 1;
    }
    .摘要列表{
        top: 0pt;
        width: 80pt;
        height: 20pt;
        left: 210pt;
        position: relative;
        z-index: 1;
        background-size: 80pt 20pt;
    }
    .框框1{
        top: -10pt;
        width: 500pt;
        height: 450pt;
        position: relative;
        z-index: 0;
        background-size: 500pt 430pt;
    }
    .表项框{
        width: 60pt;
        height: 30pt;
        position: absolute;
        z-index: 1;
    }
    .表项框1{
        width: 60pt;
        height: 30pt;
        top: 130pt;
        left: 20pt;
        position: absolute;
        z-index: 1;
    }
    .序号{
        top: 5pt;
        left: 10pt;
        width: 40pt;
        height: 20pt;
        position: absolute;
        z-index: 1;
    }
    .表项框2{
        width: 60pt;
        height: 30pt;
        top: 130pt;
        left: 150pt;
        position: absolute;
        z-index: 1;
    }
    .时间{
        top: 5pt;
        left: 10pt;
        width: 40pt;
        height: 20pt;
        position: absolute;
        z-index: 1;
    }
    .表项框3{
        width: 60pt;
        height: 30pt;
        top: 130pt;
        left: 290pt;
        position: absolute;
        z-index: 1;
    }
    .地点{
        top: 5pt;
        left: 10pt;
        width: 40pt;
        height: 20pt;
        position: absolute;
        z-index: 1;
    }
    .表项框4{
        width: 60pt;
        height: 30pt;
        top: 130pt;
        left: 410pt;
        position: absolute;
        z-index: 1;
    }
    .操作{
        top: 5pt;
        left: 10pt;
        width: 40pt;
        height: 20pt;
        position: absolute;
        z-index: 1;
    }
    .table{
        top: 222px;
        position: fixed;
    }
    .统计图{
        width: 500pt;
        height: 330pt;
        top: 300pt;
        right: 5%;
        position: absolute;
        z-index: 1;
        background-size: 500pt 330pt;
    }
    .同比信息{
        top: 10pt;
        left: 210pt;
        width: 80pt;
        height: 20pt;
        position: relative;
        z-index: 1;

    }
    .框框2{
        top: 20pt;
        width: 500pt;
        height: 240pt;
        position: absolute;
        z-index: 1;
        background-size: 500pt 230pt;
    }
    .统计{
        top: 30pt;
        left: 40pt;
        width: 400pt;
        height: 220pt;
        position: absolute;
        z-index: 1;
        background-size: 450pt 230pt;
    }
    .曲线图{
        width: 500pt;
        height: 200pt;
        top: 90pt;
        right: 5%;
        position: fixed;
        z-index: 1;
        background-size: 500pt 200pt;
    }
</style>
