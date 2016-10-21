class AuthCtrl {
  constructor($state){
    'ng-inject';

    this.title = $state.current.title;
    this.authType = $state.current.name.replace("app.", "");
  }
}

export default AuthCtrl;
