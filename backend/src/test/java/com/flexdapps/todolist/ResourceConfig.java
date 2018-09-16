package com.flexdapps.todolist;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource
@Configuration
public class ResourceConfig {

    @Value("classpath:TodoList.bin")
    public Resource todoResource;

    @Value("${contractAddress}")
    private String contractAddress;

}
