"use client";
import { Search } from 'lucide-react';
import Form from 'next/form'

export default function SearchBarComponent() {



    return (
        <div className="mb-6">
            <div className="relative">
                <Form  >
                    <input
                        type="text"
                        name='query'
                        id="query"
                        placeholder="Search anything you want to"
                        className="w-full pl-20 pr-4 py-2 border bg-white rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <Search className="absolute left-6 top-2.5 h-5 text-gray-400" />
                </Form>
            </div>
        </div>
    );
}