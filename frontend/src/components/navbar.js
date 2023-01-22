import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar">
        <h1 class="tt">
            TagTeam
        </h1>
        <div class="nblinks">
            <a class="acclinks" href="/">Home</a>
            <a class="acclinks" href="/docs">My Documents</a>
            <a class="acclinks" href="/groups">Groups</a>
            <a class="acclinks" href="/upload">Upload</a>
        </div>
    </nav>
    );
    } 

export default Navbar;
