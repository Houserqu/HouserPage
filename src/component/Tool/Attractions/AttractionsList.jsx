import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class AttractionsList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let style = {
      root:{
        width:'90%',
        margin:'auto'
      },
      card:{
        width:'23%',
        margin:'1%',
        float:'left'
      },
      summary:{
        overflow:"hidden",
        textOverflow:'ellipsis',
        whiteSpace: 'nowrap'
      },
      img:{
        width:'100%',
        heigth:'200px'
      }
    }

    console.log(this.props.list);

    let attractionslist = this.props.list.map((item)=>{
      //console.log(item.picList[0].picUrlSmall);
      let area = item.proName + '-' + item.cityName + '-' + item.areaName;

      return(
        <Card key={item.id} style={style.card}>
          <CardHeader
            title={area}
          />
          <CardMedia style={style.img}>
            <img src={item.picList.length>0  ? item.picList[0].picUrlSmall: '123'} />
          </CardMedia>
          <CardTitle style={style.summary} title={item.name} subtitle={item.address ? item.address : '未知'} />
          <CardText style={style.summary}>
            {item.summary}
          </CardText>
          <CardActions>
            <FlatButton label="高德地图" />
          </CardActions>
        </Card>
      )
    });

    return(
        <div style={style.root}>
          {attractionslist}
        </div>
      )
  }
};
