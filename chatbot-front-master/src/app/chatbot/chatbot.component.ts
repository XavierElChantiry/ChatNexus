import { Component } from '@angular/core';


@Component({
  selector: 'app-chatbot',
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center;
    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 50vw;
      margin: 1rem;
    }
  `],
  templateUrl: './chatbot.component.html',
})

export class ChatbotComponent {

  messages: any[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file: any) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });




    var latLon: string 

    var obj: string
    const api =  `${{BACKEND_URL}}` # you can hadcode the backend url here
    navigator.geolocation.getCurrentPosition((value) => {
      var crd = value.coords;
      latLon = `${crd.latitude}, ${crd.longitude}`

      fetch(api, {
        method: "POST",
        body: JSON.stringify({
          "logo": 'hats',
          "latLon": `${latLon}`,

        }),
        headers: {"content-type": "application/json"},
        //credentials: 'include'
      }
        )
      .then(response => response.json())
      .then(data => obj = data.msg) // logs all employee id
      .then(() => console.log(obj))
      .then(() => console.log(typeof obj))
      .then(() => { this.messages.push({
        text: `${obj}`,
        date: new Date(),
        reply: true,
        type: files.length ? 'file' : 'text',
        files: files,
        user: {
          name: 'ham',
        }
        })})
      .catch(error => console.log(error.message))



    }, () =>{
      fetch(api, {
        method: "POST",
        body: JSON.stringify({
          "logo": 'hats',
          "latLon": `${latLon}`,

        }),
        headers: {"content-type": "application/json"},
        //credentials: 'include'
      }
        )
      .then(response => response.json())
      .then(data => obj = data.msg) // logs all employee id
      .then(() => console.log(obj))
      .then(() => console.log(typeof obj))
      .then(() => { this.messages.push({
        text: `${obj}`,
        date: new Date(),
        reply: true,
        type: files.length ? 'file' : 'text',
        files: files,
        user: {
          name: 'ham',
        }
        })})
      .catch(error => console.log(error.message))

    });


    }

      
  }
