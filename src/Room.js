import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room  ()  {
    const {roomID}=useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 1531838600;
         const serverSecret = "820ee6059d4de59bc1f7a32e9a0a8ab0";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Talha");
         // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:`http://localhost3000/room/${roomID}`
            
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showRoomTimer: true
      });
    }


    return (
        <div ref={myMeeting}>
            
        </div>
    );
};

export default Room;