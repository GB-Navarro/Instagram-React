import { useState } from "react";
export default function Posts() {
  const posts = [
    {
      userimg: "assets/img/meowed.svg",
      username: "meowed",
      postimg: "assets/img/gato-telefone.svg",
      likedbyimg: "assets/img/respondeai.svg",
      likedbyname: "respondeai",
      likedbyothers: "outras 101.523 pessoas"
    },
    {
      userimg: "assets/img/barked.svg",
      username: "barked",
      postimg: "assets/img/dog.svg",
      likedbyimg: "assets/img/adorable_animals.svg",
      likedbyname: "adorable_animals",
      likedbyothers: "outras 99.159 pessoas"
    }
  ];

  return posts.map((post) => {
    return (
      <Post
        userimg={post.userimg}
        username={post.username}
        postimg={post.postimg}
        likedbyimg={post.likedbyimg}
        likedbyname={post.likedbyname}
        likedbyothers={post.likedbyothers}
      />
    );
  });
}

function Post(props) {

  const [likeOFF, setLikeOFF] = useState("on");
  const [likeON, setLikeON] = useState("off");
  const [color, setColor] = useState("black");

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userimg} />
          {props.username}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.postimg} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <span onClick={() => {
              if((likeON == "off") && (likeOFF == "on")){
                setLikeON("on");
                setLikeOFF("off");
                setColor("red");
              }else if((likeON =="on") && (likeOFF == "off")){
                setLikeON("off");
                setLikeOFF("on");
              }
            }}>
              <span className={likeOFF}>
                <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span className={likeON} id={color}>
                <ion-icon name="heart-sharp"></ion-icon>
              </span>
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likedbyimg} />
          <div className="texto">
            Curtido por <strong>{props.likedbyname}</strong> e{" "}
            <strong>{props.likedbyothers}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
