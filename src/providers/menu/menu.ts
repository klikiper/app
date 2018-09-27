import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class MenuProvider {
    constructor(public http: HttpClient) {
      console.log('Hello MenuProvider Provider');
    }
    
    getContent(){
      return [  
      {  
        'title':'Dashboard',
        'group':[  
        {  
          'title':'Home',
          'page':'HomePage',
          'icon':'md-home'
        }
        ]
      },
      {  
        'title':'Ready App',
        'group':[  
        {  
          'title':'Facebook',
          'page':'FacebookPage',
          'icon':'logo-facebook'
        },
        {  
          'title':'Instagram',
          'page':'InstagramPage',
          'icon':'logo-instagram'
        },
        {  
          'title':'Youtube',
          'page':'YoutubePage',
          'icon':'logo-youtube'
        },
        {  
          'title':'Twitter',
          'page':'TwitterPage',
          'icon':'logo-twitter'
        },
        {  
          'title':'Unsplash',
          'page':'UnsplashPage',
          'icon':'ios-camera',
          'layout':'tabs'
        },
        {  
          'title':'Worpress',
          'page':'WordpressPage',
          'icon':'logo-wordpress',
          'layout':'tabs'
        },
        {  
          'title':'Rss',
          'page':'RssPage',
          'icon':'logo-rss'
        }
        ]
      },
      {  
        'title':'Component',
        'group':[  
        {  
          'title':'Ui Elements',
          'page':'FragmentPage',
          'icon':'logo-buffer',
          'subPage':'UiElementsPage',
          'pages':[  
          {  
            'title':'Action Sheets',
            'name':'1'
          },
          {  
            'title':'Alerts',
            'name':'2'
          },
          {  
            'title':'Badges',
            'name':'3'
          },
          {  
            'title':'Buttons',
            'name':'4'
          },
          {  
            'title':'Cards',
            'name':'5'
          },
          {  
            'title':'Checkbox',
            'name':'6'
          },
          {  
            'title':'DateTime',
            'name':'7'
          },
          {  
            'title':'FABs',
            'name':'8'
          },
          {  
            'title':'Inputs',
            'name':'9'
          },
          {  
            'title':'Lists',
            'name':'10'
          },
          {  
            'title':'Loading',
            'name':'11'
          },
          {  
            'title':'Modals',
            'name':'13'
          },
          {  
            'title':'Popover',
            'name':'14'
          },
          {  
            'title':'Radio',
            'name':'15'
          },
          {  
            'title':'Range',
            'name':'16'
          },
          {  
            'title':'Searchbar',
            'name':'17'
          },
          {  
            'title':'Segment',
            'name':'18'
          },
          {  
            'title':'Select',
            'name':'19'
          },
          {  
            'title':'Slides',
            'name':'20'
          },
          // {  
          //   'title':'Tabs',
          //   'name':'21'
          // },
          {  
            'title':'Toast',
            'name':'22'
          },
          {  
            'title':'Toggle',
            'name':'23'
          },
          {  
            'title':'Toolbar',
            'name':'24'
          },
          ]
        },
        {  
          'title':'About',
          'page':'FragmentPage',
          'icon':'md-list-box',
          'subPage':'AboutPage',
          'pages':[  
          {  
            'title':'About V1',
            'name':'1'
          },
          {  
            'title':'About V2',
            'name':'2'
          },
          {  
            'title':'About V3',
            'name':'3'
          }
          ]
        },
        {  
          'title':'Coming Soon',
          'page':'FragmentPage',
          'icon':'md-alarm',
          'subPage':'ComingSoonPage',
          'pages':[  
          {  
            'title':'ComingSoon V1',
            'name':'1'
          },
          {  
            'title':'ComingSoon V2',
            'name':'2'
          },
          {  
            'title':'ComingSoon V3',
            'name':'3'
          }
          ]
        },
        {  
          'title':'Login',
          'page':'FragmentPage',
          'icon':'md-log-in',
          'subPage':'LoginPage',
          'pages':[  
          {  
            'title':'Login V1',
            'name':'1'
          },
          {  
            'title':'Login V2',
            'name':'2'
          },
          {  
            'title':'Login V3',
            'name':'3'
          },
          {  
            'title':'Login V4',
            'name':'4'
          },
          {  
            'title':'Login V5',
            'name':'5'
          },
          {  
            'title':'Login V6',
            'name':'6'
          },
          {  
            'title':'Login V7',
            'name':'7'
          }
          ]
        },
        {  
          'title':'Register',
          'page':'FragmentPage',
          'icon':'power',
          'subPage':'RegisterPage',
          'pages':[  
          {  
            'title':'Register V1',
            'name':'1'
          },
          {  
            'title':'Register V2',
            'name':'2'
          },
          {  
            'title':'Register V3',
            'name':'3'
          },
          {  
            'title':'Register V4',
            'name':'4'
          },
          {  
            'title':'Register V5',
            'name':'5'
          },
          {  
            'title':'Register V6',
            'name':'6'
          }
          ]
        },
        {  
          'title':'Profile',
          'page':'FragmentPage',
          'icon':'ios-contacts',
          'subPage':'ProfilePage',
          'pages':[  
          {  
            'title':'Profile V1',
            'name':'1'
          },
          {  
            'title':'Profile V2',
            'name':'2'
          },
          {  
            'title':'Profile V3',
            'name':'3'
          },
          {  
            'title':'Profile V4',
            'name':'4'
          },
          {  
            'title':'Profile V5',
            'name':'5'
          },
          {  
            'title':'Profile V6',
            'name':'6'
          }
          ]
        },
        {  
          'title':'Blog',
          'page':'FragmentPage',
          'icon':'ios-paper',
          'subPage':'BlogPage',
          'pages':[  
          {  
            'title':'Blog Basic',
            'name':'1'
          },
          {  
            'title':'Blog Timeline',
            'name':'2'
          },
          {  
            'title':'Blog Detail',
            'name':'3'
          }
          ]
        },
        {  
          'title':'Gallery',
          'page':'FragmentPage',
          'icon':'ios-easel',
          'subPage':'GalleryPage',
          'pages':[  
          {  
            'title':'Grid Grid',
            'name':'1'
          },
          {  
            'title':'Gallery Masonry',
            'name':'2'
          },
          {  
            'title':'Gallery Info',
            'name':'3'
          },
          {  
            'title':'Gallery Listed',
            'name':'4'
          },
          {  
            'title':'Gallery Horizontal',
            'name':'5'
          },
          {  
            'title':'Gallery Shots',
            'name':'6'
          }
          ]
        }
        ]
      },
      {  
        'title':'Themes',
        'group':[  
        {  
          'title':'Magazine',
          'page':'MagazinePage',
          'icon':'md-paper',
          'layout':'tabs'
        },
        {  
          'title':'Shop',
          'page':'ShopPage',
          'icon':'ios-shirt',
          'layout':'tabs'
        },
        {  
          'title':'Music Player',
          'page':'MusicPage',
          'icon':'md-musical-note',
          'layout':'tabs'
        },
        {  
          'title':'Chat',
          'page':'ChatPage',
          'icon':'ios-chatbubbles',
          'layout':'tabs'
        },
        {  
          'title':'Food',
          'page':'FoodPage',
          'icon':'ios-pizza',
          'layout':'tabs'
        }
        ]
      },
      {  
        'title':'Settings',
        'group':[  
        {  
          'title':'Color Skin',
          'page':'SettingColorPage',
          'icon':'md-color-fill'
        },
        {  
          'title':'Dashboard',
          'page':'SettingDashboardPage',
          'icon':'md-speedometer'
        },
        {  
          'title':'Side Menu',
          'page':'SettingSidemenuPage',
          'icon':'md-albums'
        },
        ]
      },
      {
        'title':'Native',
        'group':[
          {
            'title':'Admob',
            'page':'AdmobPage',
            'icon':'md-cash'
          }
        ]
      }
      ]//end menu list
    }//end getContent
  }