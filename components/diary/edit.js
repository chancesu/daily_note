import React, { useRef } from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontGroup : {
        "namyun" : true,
        "score-dream" : false,
        "binggae" : false,
        "dotum" : false
      },
      font : "namyun"
    }
  }

  getFontType = (event) => {
    let obj = {}
    obj[event.target.id] = event.target.checked ;
    console.log(event.target.id,obj);
    this.setState({fontGroup: obj})
    console.log(event.target.id,obj);
  }

  render() {
    return (
      <>
        <div className="edit-box">
          <form id="diary" action="">
            <div className="type-box">
              <input type="radio" id="namyun" name="font-type" onChange={this.getFontType} checked={this.state.fontGroup['namyun']}/>
              <label for="namyun" className="namyun">김남윤체</label>
              <input type="radio" id="score-dream" name="font-type"  onChange={this.getFontType} checked={this.state.fontGroup['score-dream']}/>
              <label for="score-dream" className="score-dream">에스코어 드림</label>
              <input type="radio" id="binggae" name="font-type"  onChange={this.getFontType} checked={this.state.fontGroup['binggae']}/>
              <label for="binggae" className="binggae">빙그레 메로나체</label>
              {JSON.stringify(this.fontGroup)}
            </div>
            <textarea id="diary-text" className={this.state.font}></textarea>
            <div className="button-group">
              <button type="button" className="btn-cancle">취소</button>
              <button type="submit" className="btn-submit">입력</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}