function MyDebounce(callback,delay,immediate = false) {
  //timer为定时器的标识,用于记录上次事件触发
  let timer = null;

  //表示本次调用是否执行过函数了
  let isInvoke = false;

  //触发事件时的执行函数
  const _debounce = function (...args) {
    //如果immediate为true并且isInvoke为false,表示立即执行函数
    if (immediate && !isInvoke) {
      callback.apply(this,args);
      isInvoke = true;
      return;
    }

    //判断是否再次触发过,如果再次触发将定时器清空
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      //this向外层作用域寻找,指向调用_debounce函数的对象
      callback.apply(this,args)
      //执行完函数将变量初始化为原来的状态
      timer = null;
      isInvoke = false;
    }, delay);
  }
  //实现取消功能
  _debounce.chanel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      isInvoke = false;
    }
  }
  return _debounce;
}