import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import withValidation from './withValidation';
import './css/TextEditor.css';

class TextEditor extends Component {

    state = {
        editorState: '',
    }

    componentDidMount() {
        const initialEditorState = this.getStateFromHtml(this.props.value);
        this.setState({editorState: initialEditorState});
    }

    getStateFromHtml = (html) => {
        html = html ? html : '';
        const blocksFromHtml = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        return editorState;
    }

    onEditorStateChange = (editorState) => {
        this.setState({editorState: editorState});
        const result = { target: {} };
        if (editorState.getCurrentContent().hasText()) {
            result.target.value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        } else {
            result.target.value = '';
        }
        this.props.changed(result);
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className={"col-md-" + (this.props.cols ? this.props.cols : 12)}>
                <div className="form-group">
                    <label
                        className={"form-form-control-label" + (this.props.labelClasses ? " " + this.props.labelClasses : "")}
                        htmlFor={this.props.id}>
                        {this.props.label + ":"}
                    </label>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName={"demo-editor" + this.props.validationClass}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <span className="help-block">{this.props.helpText}</span>
                </div>
            </div>
        );
    }
}

export default withValidation(TextEditor);