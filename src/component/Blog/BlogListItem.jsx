import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProjectChips from './ProjectChips';

class BlogListItem extends Component {
    state={
        expanded:false
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    render() {
        const {blog} = this.props;
        return (
            <div>
					<Card  expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
					    <CardHeader
					      title='Houser'
					      subtitle={blog.updated_at}
					      avatar='http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg'
                          showExpandableButton={true}
					    />
                        <CardTitle title={blog.title} subtitle={blog.githuburl} />
                        <CardActions>
                            <ProjectChips tags={blog.tags} />
                        </CardActions>
					    
					    <CardText expandable={true}>
                            {blog.content}
					    </CardText>
					</Card>
            </div>
        );
    }
}

export default BlogListItem;