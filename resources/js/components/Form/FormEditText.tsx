import React from "react";

interface FormEditTextProps {
    text: string;
    onChange: (text: string) => void;
}

const FormEditText = ({ text, onChange }: FormEditTextProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 450) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="space-y-8">
            {/* TEXT AREA */}
            <div>
                <textarea
                    value={text}
                    onChange={handleChange}
                    className="w-full resize-y border rounded-md focus:outline-pink-400 p-4"
                    placeholder="Enter your profile text here..."
                    rows={6}
                    maxLength={450}
                    style={{
                        resize: "vertical",
                        minHeight: "100px",
                        maxHeight: "300px",
                    }}
                />
                <span className="text-sm text-gray-400">
                    {`${text.length}/450`}
                </span>
            </div>
            <div>
                <p className="text-sm my-2 text-gray-400">
                    1. Your profile type should be maximum 450 characters. Your
                    profile text will appear in the search results. Therefore,
                    your profile type is very important for other members to
                    have more information about you! Also, if you express
                    yourself, you can gain the trust of other members. Now tell
                    us how you are, the characteristics of the candidate you are
                    looking for. When you fill in the profile article, your
                    profile will be put on hold for approval.
                </p>
                <p className="text-sm text-gray-400">
                    2. Please do not write your contact information such as
                    e-mail, telephone and do not report indirectly.
                </p>
            </div>
        </div>
    );
};

export default FormEditText;
