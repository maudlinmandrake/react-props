import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Bee"
      img="https://fcbk.su/_data/stickers/bee_puppycat/bee_puppycat_02.png"
      alt="Brown-haired girl in a bee sweater. She is hungry"
      tel="+123 456 789"
      email="bee@sohungry.com"
    />
    <Card
      name="Puppycat"
      img="https://img.pngio.com/facebook-messenger-bee-puppycat-sticker-18-free-download-puppycat-png-255_256.png"
      alt="A white cat with purple feet and ears. He's wearing a pink collar with a yellow bell. He's farting. Rude!"
      tel="+555 555 555"
      email="puppycat@2cute2poot.com"
    />
  </div>,
  document.getElementById("root")
);
