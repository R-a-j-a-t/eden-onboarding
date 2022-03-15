import React, {useContext} from 'react';

import { UserContext } from './App';

export default function HomeSetup() {

    const {onSubmit} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let { target } = event;

        let workspaceName = target['workspace-name'].value;
        let workspaceUrl = target['workspace-url'].value;

        onSubmit({workspaceName, workspaceUrl});
    };


    return (
        <div id="home-setup">
            <h3>Let's set up a home for all your work</h3>
            <h5>You can always create another workspace later.</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="workspace-name">Workspace Name</label><br />
                <input id="workspace-name" placeholder="Eden" required />
                <br />
                <label htmlFor="workspace-url">
                    Workspace URL <span className="optional">(optional)</span>
                </label><br />
                <div id="workspace-url-group">
                    <input type="button" disabled value="www.eden.com/" />
                    <input id="workspace-url" placeholder="Example" />
                </div>
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    );
}