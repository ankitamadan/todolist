package com.flexdapps.todolist.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.Resource;

@Configuration
@PropertySource("classpath:/application.properties")
public class ResourceConfig {

    @Value("classpath:UTC--2018-01-20T06-49-07.941000000Z--7297570fb63b4ad27fb950365f645cbdda42e02e.json")
    private Resource resource;

    @Value("${contractAddress}")
    private String contractAddress;

    @Value("${password}")
    private String password;

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    public String getContractAddress() {
        return contractAddress;
    }

    public Resource getResource() {
        return resource;
    }

    public String getPassword() {
        return password;
    }


}
