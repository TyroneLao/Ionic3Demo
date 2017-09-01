import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClobalVariable{
    //接口基础地址 如：http://yidaodajia.com
    // static domain = "http://localhost:80";
    static domain = "";
}

@Injectable()
export class HttpService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

    constructor(public http : Http, public toastCtrl: ToastController){

    }
    //简单对传输的参数进行编码
    // public encode(type,params): string {
    // //     let str = '';
    //     if(params){
    //         for(let key in params){
    //             if(params.hasOwnProperty(key)){
    //                 let value = params[key];
    //                 str +=encodeURIComponent(key)+ '=' +encodeURIComponent(value)+'&';
    //             }
    //         }
    //         if(str.length>1&&type=='get'){
    //             str = '?'+str.substring(0,str.length-1);
    //         }
            
    //     }
    //     return str;
    // }
     //复杂对传输的参数进行编码,解决传值问题
    public encode (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += this.encode(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += this.encode(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    httpGet( url:string, params?:object, loader?: boolean):any{
        // let loading = this.loadingCtrl.create();
        // if(loader){
        //     loading.present();
        // }
        // if (loader) {
        //     loading.dismiss();
        // }
        // console.log(ClobalVariable.domain+url+this.encode(params));
        if(params){
            url=ClobalVariable.domain+url+'?'+this.encode(params);
        }else{
            url=ClobalVariable.domain+url;
        }
        return this.http.get(url)
            .toPromise()
            // .then(response => {//成功返回
            //     // if (loader) {
            //     //     loading.dismiss();
            //     // }
            //     // console.log(response);
            //     // console.log(response.json())
            //     callback( response.json());
            //     // return response.json();
                 
            // })
            .catch(error => {//出错
                // if (loader) {
                //     loading.dismiss();
                // }
                return this.handleError(error);
            });
    }

    httpPost(url:string, params?,loader?: boolean) {
        // let loading = this.loadingCtrl.create();
        // if (loader) {
        //     loading.present();
        // }
        return this.http.post(ClobalVariable.domain+url,this.encode(params),{headers:this.headers})
            .toPromise()
            .catch(error => {
                // if (loader) {
                //     loading.dismiss();
                // }
                return this.handleError(error);
            });
    }

    private handleError(error: Response | any){
        let msg='';
        if (error.status == 400) {
            msg = '请求无效(code：404)';
            console.log(msg + '，请检查参数类型是否匹配');
        }
        else if (error.status == 404) {
            msg = '请求资源不存在(code：404)';
            console.error(msg + '，请检查路径是否正确');
        }
        else if (error.status == 500) {
            msg = '服务器发生错误(code：500)';
            console.error(msg + '，请检查路径是否正确');
        }else{
            console.log(error);
            if (msg == '') {
                msg='请求失败';
            }
            this.toast(msg);
        }

        return Promise.reject(error.message || error);
    }
    toast(message, callback?) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            dismissOnPageChange: true,
        });
        toast.present();
        if (callback) {
            callback();
        }
    }

}