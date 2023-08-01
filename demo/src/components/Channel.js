import React, { useEffect } from 'react'
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { useAction } from '@/store';

function Channel({ width, value, onChange }) {
    const { getChanels } = useAction()
    // eslint-disable-next-line
    useEffect(() => { getChanels() }, [])
    const { channels } = useSelector((state) => state.article);
    return (
        <Select
            value={value}
            onChange={(e) => onChange(e)}
            placeholder="请选择所属频道"
            style={width ? { width } : null}
        >
            {channels.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
            ))}
        </Select>
    )
}

export default Channel