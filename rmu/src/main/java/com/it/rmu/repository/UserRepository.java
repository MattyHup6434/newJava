package com.it.rmu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.it.rmu.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer>{

	@Query("select t from UserEntity t where t.userName = ?1")
    public UserEntity findByUserName(String userName);
	@Query("select t from UserEntity t where t.userName = ?1 and t.password =?2 ")
    public UserEntity findByUserNameAndPassword(String userName, String password);
}