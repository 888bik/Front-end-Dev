// type Modules = {
//   menu: {
//     setActiveIndex: (index: string) => string;
//     setCollapse: (index: string) => string;
//   };
//   tabs: {
//     setEditableTabsValue: (value: string) => void;
//     setTabs: (index: string) => void;
//     setTabsList: (index: string) => void;
//   };
// };

// //模板字符串类型
// type Template<T, U> = `${T & string}/${U & string}`;

// //2.先拿到付模块的属性名
// type ModulesSpliceKeys<T> = {
//   [Key in keyof T]: T[Key];
// };
// type TestModulesSpliceKeys = ModulesSpliceKeys<Modules>;

// //3.父，子模块联合
// type ModulesSpliceKeys_<T> = {
//   [Key in keyof T]: Template<Key, keyof T[Key]>;
// }[keyof T];

// type TestModulesSpliceKeys_ = ModulesSpliceKeys_<Modules>;

type App = {
  user: {
    login: () => void;
    logout: () => void;
  };
  article: {
    publish: () => void;
    delete: () => void;
  };
};

//模板字符串类型
//类型收窄：T & string确保T是string或者可以被当做string使用
type Template<T, U> = `${T & string}/${U & string}`;

//keyof T获取对象的key，通过key获取值，比如App["user"| "article"]得到"user/login" | "user/logout" ....
//App["user"| "article"]获取所有属性的value进行拼接
type AppKeys<T> = {
  [K in keyof T]: Template<K, keyof T[K]>;
};

// "user/login" | "user/logout" | "article/publish" | "article/delete"
type AppKeyPaths = AppKeys<App>;
