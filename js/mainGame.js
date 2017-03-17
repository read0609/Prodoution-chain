//當有要加關卡時, 可以使用addNewLevel
//第一個被加進來的Level就是啟動點, 所以一開始遊戲就進入MyMenu
/*Framework.Game.addNewLevel({
  Index: new MyIndex()
});*/
Framework.Game.addNewLevel({
  Game_Control: new Control()
});
/*Framework.Game.addNewLevel({
  Agricultural_area: new AgriculturalArea()
});*/



//讓Game開始運行
Framework.Game.start();
