import React, { Component } from "react";
import SearchBar from "./SearchBar";

class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-post">
                <div className="recent-post-wrapper">
                    <div className="recent-post-heading">recent post</div>
                    <ul className="recent-post-posts">
                        <li>Recent post 1</li>
                        <li>Recent post 2</li>
                        <li>Recent post 3</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RecentPosts;