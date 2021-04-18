/* global Dialog: true */
/* exported $dlgAbout */
let $dlgAbout = new Dialog('about');

((dlg) => {
  const reposURL = 'https://github.com/wangding/jsnotepad/';
  let content = `
    <h1 class="slogan">JSNotepad</h1>
    <hr>
    <input class="btn-ok btn" type="button" value="确定" autofocus>`;

  let $dlg   = dlg.generate(content, '关于“记事本”');
  let $btnOk = $dlg.find('.btn-ok');

  dlg.show = () => {
    $('body').append($dlg);
    dlg.init();
    $btnOk.focus();

    $btnOk.click(dlg.destory);

    $dlg.click((e) => {
      $btnOk.focus();
      e.stopPropagation();
    });
  };
})($dlgAbout);
